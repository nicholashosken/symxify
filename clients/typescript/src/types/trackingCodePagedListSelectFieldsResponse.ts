import { TrackingCode } from "./trackingCode";
import { VersionType } from "./versionType";

export interface TrackingCodePagedListSelectFieldsResponse {
    trackingCode: TrackingCode[];
    token: string;
    version1: VersionType;
    messageId: string;
}