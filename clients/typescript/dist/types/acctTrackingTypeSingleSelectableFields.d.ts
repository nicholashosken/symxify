import { AcctTrackingTypeFields } from "./acctTrackingTypeFields";
import { VersionType } from "./versionType";
export interface AcctTrackingTypeSingleSelectableFields {
    includeAllAcctTrackingTypeFields: boolean | null;
    acctTrackingTypeFields: AcctTrackingTypeFields;
    version1: VersionType;
}
