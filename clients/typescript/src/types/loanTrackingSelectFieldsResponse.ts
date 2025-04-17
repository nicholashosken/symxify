import { LoanTracking } from "./loanTracking";
import { VersionType } from "./versionType";

export interface LoanTrackingSelectFieldsResponse {
    loanTracking: LoanTracking;
    version1: VersionType;
    messageId: string;
}