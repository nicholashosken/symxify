import { Tracking } from "./tracking";
import { VersionType } from "./versionType";

export interface TrackingPagedListSelectFieldsResponse {
    tracking: Tracking[];
    token: string;
    version1: VersionType;
    messageId: string;
}