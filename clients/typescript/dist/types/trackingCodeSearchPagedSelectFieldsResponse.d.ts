import { TrackingCode } from "./trackingCode";
import { VersionType } from "./versionType";
export interface TrackingCodeSearchPagedSelectFieldsResponse {
    trackingCode: TrackingCode[];
    token: string;
    version1: VersionType;
    messageId: string;
}
