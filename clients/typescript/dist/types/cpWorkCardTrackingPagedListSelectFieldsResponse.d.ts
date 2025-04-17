import { CpWorkCardTracking } from "./cpWorkCardTracking";
import { VersionType } from "./versionType";
export interface CpWorkCardTrackingPagedListSelectFieldsResponse {
    cpWorkCardTracking: CpWorkCardTracking[];
    token: string;
    version1: VersionType;
    messageId: string;
}
