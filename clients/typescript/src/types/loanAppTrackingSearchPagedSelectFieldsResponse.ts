import { LoanAppTracking } from "./loanAppTracking";
import { VersionType } from "./versionType";

export interface LoanAppTrackingSearchPagedSelectFieldsResponse {
    loanAppTracking: LoanAppTracking[];
    token: string;
    version1: VersionType;
    messageId: string;
}