import { CpWorkCardTracking } from "./cpWorkCardTracking";
import { VersionType } from "./versionType";

export interface CpWorkCardTrackingSearchPagedSelectFieldsResponse {
    cpWorkCardTracking: CpWorkCardTracking[];
    token: string;
    version1: VersionType;
    messageId: string;
}