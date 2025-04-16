export const Services: "account"
  | "parameter"
  | "batchjobs"
  | "creditreport"
  | "filemanagement"
  | "findby"
  | "poweron"
  | "transactions"
  | "user"
  | undefined
  = undefined

//Figure out how to generate the operations from the wsdl, or just generate typescript objects with
// dotnet-cs2ts C:\Users\tyler\source\symx-connect\api\symx\References\AccountService --output . --import-generation simple

export const Operations: "getAccountSelectField" | "" = "" //TODO: Get from service list
