import { VersionType } from "./versionType";
import { LoanProjectionBaseRequest } from "./loanProjectionBaseRequest";

export interface CalculatePaymentAmountRequest extends LoanProjectionBaseRequest {
    loanAmount: number | null;
    maturityDate: string | null;
    version1: VersionType;
}