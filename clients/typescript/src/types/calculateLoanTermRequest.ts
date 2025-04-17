import { VersionType } from "./versionType";
import { LoanProjectionBaseRequest } from "./loanProjectionBaseRequest";

export interface CalculateLoanTermRequest extends LoanProjectionBaseRequest {
    loanAmount: number | null;
    payment: number | null;
    version1: VersionType;
}