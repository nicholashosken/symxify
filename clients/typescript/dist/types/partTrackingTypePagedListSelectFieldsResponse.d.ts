import { PartTrackingType } from "./partTrackingType";
import { VersionType } from "./versionType";
export interface PartTrackingTypePagedListSelectFieldsResponse {
    partTrackingType: PartTrackingType[];
    token: string;
    version1: VersionType;
    messageId: string;
}
