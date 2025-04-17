import { AcctMembGrpDescFields } from "./acctMembGrpDescFields";
import { VersionType } from "./versionType";

export interface AcctMembGrpDescSingleSelectableFields {
    includeAllAcctMembGrpDescFields: boolean | null;
    acctMembGrpDescFields: AcctMembGrpDescFields;
    version1: VersionType;
}