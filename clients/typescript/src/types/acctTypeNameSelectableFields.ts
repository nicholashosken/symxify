import { AcctTypeNameFields } from "./acctTypeNameFields";
import { VersionType } from "./versionType";

export interface AcctTypeNameSelectableFields {
    includeAllAcctTypeNameFields: boolean | null;
    acctTypeNameFields: AcctTypeNameFields;
    version1: VersionType;
}