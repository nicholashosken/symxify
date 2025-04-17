import { Tracking } from "./tracking";
import { VersionType } from "./versionType";

export interface TrackingSelectFieldsResponse {
    tracking: Tracking;
    version1: VersionType;
    messageId: string;
}