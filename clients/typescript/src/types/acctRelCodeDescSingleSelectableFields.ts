import { AcctRelCodeDescFields } from "./acctRelCodeDescFields";
import { VersionType } from "./versionType";

export interface AcctRelCodeDescSingleSelectableFields {
    includeAllAcctRelCodeDescFields: boolean | null;
    acctRelCodeDescFields: AcctRelCodeDescFields;
    version1: VersionType;
}