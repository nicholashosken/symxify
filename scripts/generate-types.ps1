#Run this function in the root of the folder with your C# types, each seperated into their own XService folders.
#E.g., AccountService, ParameterService, etc
function Generate-Typescript-Types()
{
  param (
    [Parameter(Mandatory, HelpMessage="The root location of your C# symxchange object files, separated by service")]
    [string]$CSharpRootFolderLocation,
    [Parameter(Mandatory, HelpMessage="The output location for your files. E.g., C:\users\user\desktop\typescript")]
    [string]$OutputFolderLocation
  )
    $folders = $CSharpRootFolderLocation

    #Typescript
    foreach ($folder in $folders)
    {
        $pathExists = Test-Path($OutputFolderLocation)
        if ($pathExists -eq $false)
        {
            new-item -ItemType "directory" -Name $folder.Name -Path $OutputFolderLocation
        }

        dotnet-cs2ts $folder --output "$OutputFolderLocation" -i Simple
    }
}