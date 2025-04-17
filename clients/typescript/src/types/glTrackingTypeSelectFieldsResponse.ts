import { GlTrackingType } from "./glTrackingType";
import { VersionType } from "./versionType";

export interface GlTrackingTypeSelectFieldsResponse {
    glTrackingType: GlTrackingType;
    version1: VersionType;
    messageId: string;
}