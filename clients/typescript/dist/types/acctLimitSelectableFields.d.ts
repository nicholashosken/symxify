import { AcctLimitFields } from "./acctLimitFields";
import { VersionType } from "./versionType";
export interface AcctLimitSelectableFields {
    includeAllAcctLimitFields: boolean | null;
    acctLimitFields: AcctLimitFields;
    version1: VersionType;
}
