import { LoanTracking } from "./loanTracking";
import { VersionType } from "./versionType";

export interface LoanTrackingSearchPagedSelectFieldsResponse {
    loanTracking: LoanTracking[];
    token: string;
    version1: VersionType;
    messageId: string;
}