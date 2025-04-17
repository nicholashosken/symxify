import { GlTrackingType } from "./glTrackingType";
import { VersionType } from "./versionType";
export interface GlTrackingTypeSearchPagedSelectFieldsResponse {
    glTrackingType: GlTrackingType[];
    token: string;
    version1: VersionType;
    messageId: string;
}
