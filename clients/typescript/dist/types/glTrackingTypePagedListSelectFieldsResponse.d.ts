import { GlTrackingType } from "./glTrackingType";
import { VersionType } from "./versionType";
export interface GlTrackingTypePagedListSelectFieldsResponse {
    glTrackingType: GlTrackingType[];
    token: string;
    version1: VersionType;
    messageId: string;
}
