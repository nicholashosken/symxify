import { GlAccountTracking } from "./glAccountTracking";
import { VersionType } from "./versionType";

export interface GlAccountTrackingSelectFieldsResponse {
    glAccountTracking: GlAccountTracking;
    version1: VersionType;
    messageId: string;
}