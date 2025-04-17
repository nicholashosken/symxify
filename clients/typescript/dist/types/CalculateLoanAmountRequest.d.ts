import { VersionType } from "./versionType";
import { LoanProjectionBaseRequest } from "./loanProjectionBaseRequest";
export interface CalculateLoanAmountRequest extends LoanProjectionBaseRequest {
    maturityDate: string | null;
    payment: number | null;
    version1: VersionType;
}
