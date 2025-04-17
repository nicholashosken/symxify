import { LoanAppTracking } from "./loanAppTracking";
import { VersionType } from "./versionType";

export interface LoanAppTrackingSelectFieldsResponse {
    loanAppTracking: LoanAppTracking;
    version1: VersionType;
    messageId: string;
}