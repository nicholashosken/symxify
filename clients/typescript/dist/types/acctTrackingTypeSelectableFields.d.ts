import { AcctTrackingTypeFields } from "./acctTrackingTypeFields";
import { VersionType } from "./versionType";
export interface AcctTrackingTypeSelectableFields {
    includeAllAcctTrackingTypeFields: boolean | null;
    acctTrackingTypeFields: AcctTrackingTypeFields;
    version1: VersionType;
}
