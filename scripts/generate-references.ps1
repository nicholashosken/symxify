###
# This script will go through and generate types.
# This script will generate types for the Symxify API, and then use those C# types to generate other
# types for other languages, such as Typescript, Java, etc.
# The generated types for other languages will only include the necessary types. Since with the persistent 
# version of Symxchange, the provided WSDL does not conform to the XML standard, and has multiple instances of
# duplicate attributes, which breaks most WSDL-to-type tools. Converting the WSDL to C#, and from C# to x type
# appears to be the easiest way to generate types.
#
# Ensure you have the following tools installed 
#   xscgen.exe (dotnet cli) (C#)
###

#run this in the root folder (2022, persistent, etc)

function Generate-Csharp-Types() {
  param (
      [Parameter(Mandatory, HelpMessage="The CDN url to generate objects from")]
      [string]
      $symxchange_service_list_url,
      [Parameter(Mandatory, HelpMessage="The output folder to generate types and download XML Schemas")]
      [string]
      $outputFolder
  )

  $services = (iwr $symxchange_service_list_url).Content # get the service list in it's entirety
  $services = ConvertFrom-Json $services
  $pathExists = Test-Path -Path $outputFolder 
  if ($pathExists -eq $false) {
    New-Item $outputFolder -ItemType Directory
  }

  foreach ($service in $services) {
    $serviceName = ([uri]$service).Segments[-1]
    $culture = (Get-Culture).TextInfo
    $serviceFolderName = $culture.ToTitleCase(([uri]$service).Segments[-2].Replace("/", "")) + "Service"
    $serviceFolderExists = Test-Path $outputFolder/$serviceFolderName
    if ($serviceFolderExists -eq $false) {
        New-Item $outputFolder/$serviceFolderName -ItemType Directory
    }
    iwr $service -OutFile $outputFolder/$serviceFolderName/$serviceName
  }
  
  
  $folders = Get-ChildItem $outputFolder
  
  foreach ($folder in $folders) {
      $file = Get-ChildItem $folder.FullName | Where-Object { $_.Extension -eq ".wsdl" }
      if (-not $file) { continue }
  
      [xml]$xml = Get-Content $file.FullName
  
      # Define source and target nodes
      $sourceNode = $xml.definitions
      $schemaNode = $xml.definitions.types.schema
  
      # Move attributes from $sourceNode (definitions) to $schemaNode (schema)
      foreach ($attr in $sourceNode.Attributes.Clone()) {
          # Create new attribute in the schema node
          if ($attr.'#text' -match "http") {
            $newAttr = $xml.CreateAttribute($attr.Name)
            $newAttr.Value = $attr.Value
    
            # Append the attribute to schema node
            $schemaNode.Attributes.Append($newAttr)
            
            # Remove from source node
            $sourceNode.Attributes.RemoveNamedItem($attr.Name)
          }
      }
  
      # Ensure xmlns:xsd="http://www.w3.org/2001/XMLSchema" is the first attribute
      $existingXsdAttr = $schemaNode.Attributes.GetNamedItem("xmlns:xsd")
      if (-not $existingXsdAttr) {
          $xmlnsNamespace = "http://www.w3.org/2000/xmlns/"
          $xsdAttr = $xml.CreateAttribute("xmlns", "xsd", $xmlnsNamespace)
          $xsdAttr.Value = "http://www.w3.org/2001/XMLSchema"
          
          # Insert as the first attribute
          $schemaNode.Attributes.InsertBefore($xsdAttr, $schemaNode.Attributes.Item(0))
      }
  
      $existingXmlnsAttr = $schemaNode.Attributes.GetNamedItem("xmlns")
      if (-not $existingXmlnsAttr) {
          $xmlnsAttr = $xml.CreateAttribute("xmlns")
          $xmlnsAttr.Value = "http://www.w3.org/2001/XMLSchema"
  
          # Insert it after xmlns:xsd if it exists
          if ($schemaNode.Attributes.Count -gt 0) {
              $schemaNode.Attributes.InsertBefore($xmlnsAttr, $schemaNode.Attributes.Item(1))
          } else {
              $schemaNode.Attributes.Append($xmlnsAttr)
          }
      }
  
      # Output the modified XML
      $prepend = '<?xml version="1.0" encoding="UTF-8"?>'
      $path = ($file.Directory.FullName + "\" + $file.BaseName + "_xsd.xsd")
  
      Set-Content $path -Value $prepend
      Add-Content -Path $path -Value $schemaNode.OuterXml
  
      Write-Output "Processed: $file.FullName"
      $xsdPath =  $file.Directory.FullName + "/*" + ".xsd"
      new-item -ItemType Directory -Name "generated-output" -Path $folder.FullName -Force
      $folderPath = $folder.FullName + "\generated-output"
      xscgen.exe $xsdPath --sf --un --uc --order --cn -0 --collectionSettersMode=Public -o $folderPath -n $xml.definitions.name
  }
  
  #TODO: Automatically load the schema files into the CDN after the file generation is complete.
  Write-Output "Generated C# types successfully. Navigate into $folderPath and drop the WSDL schema files into your CDN."
}