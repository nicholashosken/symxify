import { VersionType } from "./versionType";
import { LoanProjectionBaseResponse } from "./loanProjectionBaseResponse";
export interface CalculateLoanAmountResponse extends LoanProjectionBaseResponse {
    version1: VersionType;
}
