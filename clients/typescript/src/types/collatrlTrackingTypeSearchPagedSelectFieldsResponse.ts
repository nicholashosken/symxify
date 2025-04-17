import { CollatrlTrackingType } from "./collatrlTrackingType";
import { VersionType } from "./versionType";

export interface CollatrlTrackingTypeSearchPagedSelectFieldsResponse {
    collatrlTrackingType: CollatrlTrackingType[];
    token: string;
    version1: VersionType;
    messageId: string;
}