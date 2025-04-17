import { AcctTrackingType } from "./acctTrackingType";
import { VersionType } from "./versionType";

export interface AcctTrackingTypePagedListSelectFieldsResponse {
    acctTrackingType: AcctTrackingType[];
    token: string;
    version1: VersionType;
    messageId: string;
}