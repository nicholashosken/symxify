import { LoanTracking } from "./loanTracking";
import { VersionType } from "./versionType";
export interface LoanTrackingPagedListSelectFieldsResponse {
    loanTracking: LoanTracking[];
    token: string;
    version1: VersionType;
    messageId: string;
}
