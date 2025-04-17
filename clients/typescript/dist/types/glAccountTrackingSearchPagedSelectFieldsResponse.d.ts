import { GlAccountTracking } from "./glAccountTracking";
import { VersionType } from "./versionType";
export interface GlAccountTrackingSearchPagedSelectFieldsResponse {
    glAccountTracking: GlAccountTracking[];
    token: string;
    version1: VersionType;
    messageId: string;
}
