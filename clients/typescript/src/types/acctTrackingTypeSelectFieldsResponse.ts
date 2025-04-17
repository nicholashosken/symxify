import { AcctTrackingType } from "./acctTrackingType";
import { VersionType } from "./versionType";

export interface AcctTrackingTypeSelectFieldsResponse {
    acctTrackingType: AcctTrackingType;
    version1: VersionType;
    messageId: string;
}