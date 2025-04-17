import { TrackingCode } from "./trackingCode";
import { VersionType } from "./versionType";

export interface TrackingCodeSelectFieldsResponse {
    trackingCode: TrackingCode;
    version1: VersionType;
    messageId: string;
}