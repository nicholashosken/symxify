import { VersionType } from "./versionType";
import { LoanProjectionBaseResponse } from "./loanProjectionBaseResponse";
export interface CalculateLoanTermResponse extends LoanProjectionBaseResponse {
    version1: VersionType;
}
