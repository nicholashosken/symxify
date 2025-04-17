import { ExternalLoanTracking } from "./externalLoanTracking";
import { VersionType } from "./versionType";
export interface ExternalLoanTrackingSelectFieldsResponse {
    externalLoanTracking: ExternalLoanTracking;
    version1: VersionType;
    messageId: string;
}
