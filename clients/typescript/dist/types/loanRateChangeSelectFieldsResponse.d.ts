import { LoanRateChange } from "./loanRateChange";
import { VersionType } from "./versionType";
export interface LoanRateChangeSelectFieldsResponse {
    loanRateChange: LoanRateChange;
    version1: VersionType;
    messageId: string;
}
