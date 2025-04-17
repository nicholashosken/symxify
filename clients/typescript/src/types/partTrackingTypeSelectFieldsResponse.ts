import { PartTrackingType } from "./partTrackingType";
import { VersionType } from "./versionType";

export interface PartTrackingTypeSelectFieldsResponse {
    partTrackingType: PartTrackingType;
    version1: VersionType;
    messageId: string;
}