import { LoanAppTracking } from "./loanAppTracking";
import { VersionType } from "./versionType";

export interface LoanAppTrackingPagedListSelectFieldsResponse {
    loanAppTracking: LoanAppTracking[];
    token: string;
    version1: VersionType;
    messageId: string;
}