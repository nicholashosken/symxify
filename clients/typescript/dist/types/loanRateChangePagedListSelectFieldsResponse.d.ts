import { LoanRateChange } from "./loanRateChange";
import { VersionType } from "./versionType";
export interface LoanRateChangePagedListSelectFieldsResponse {
    loanRateChange: LoanRateChange[];
    token: string;
    version1: VersionType;
    messageId: string;
}
