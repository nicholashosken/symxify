import { CpWorkCardTracking } from "./cpWorkCardTracking";
import { VersionType } from "./versionType";
export interface CpWorkCardTrackingSelectFieldsResponse {
    cpWorkCardTracking: CpWorkCardTracking;
    version1: VersionType;
    messageId: string;
}
