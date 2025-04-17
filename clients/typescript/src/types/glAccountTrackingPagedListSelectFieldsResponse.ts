import { GlAccountTracking } from "./glAccountTracking";
import { VersionType } from "./versionType";

export interface GlAccountTrackingPagedListSelectFieldsResponse {
    glAccountTracking: GlAccountTracking[];
    token: string;
    version1: VersionType;
    messageId: string;
}