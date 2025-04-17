import { AcctLimitFields } from "./acctLimitFields";
import { VersionType } from "./versionType";

export interface AcctLimitSingleSelectableFields {
    includeAllAcctLimitFields: boolean | null;
    acctLimitFields: AcctLimitFields;
    version1: VersionType;
}