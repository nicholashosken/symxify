import { CollatrlTrackingType } from "./collatrlTrackingType";
import { VersionType } from "./versionType";

export interface CollatrlTrackingTypePagedListSelectFieldsResponse {
    collatrlTrackingType: CollatrlTrackingType[];
    token: string;
    version1: VersionType;
    messageId: string;
}