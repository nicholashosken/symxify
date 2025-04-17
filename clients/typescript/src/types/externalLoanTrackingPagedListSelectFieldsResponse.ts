import { ExternalLoanTracking } from "./externalLoanTracking";
import { VersionType } from "./versionType";

export interface ExternalLoanTrackingPagedListSelectFieldsResponse {
    externalLoanTracking: ExternalLoanTracking[];
    token: string;
    version1: VersionType;
    messageId: string;
}