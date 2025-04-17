import { Tracking } from "./tracking";
import { VersionType } from "./versionType";
export interface TrackingSearchPagedSelectFieldsResponse {
    tracking: Tracking[];
    token: string;
    version1: VersionType;
    messageId: string;
}
