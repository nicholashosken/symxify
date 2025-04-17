import { LoanRateChange } from "./loanRateChange";
import { VersionType } from "./versionType";
export interface LoanRateChangeSearchPagedSelectFieldsResponse {
    loanRateChange: LoanRateChange[];
    token: string;
    version1: VersionType;
    messageId: string;
}
