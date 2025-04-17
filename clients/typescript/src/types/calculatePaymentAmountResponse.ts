import { VersionType } from "./versionType";
import { LoanProjectionBaseResponse } from "./loanProjectionBaseResponse";

export interface CalculatePaymentAmountResponse extends LoanProjectionBaseResponse {
    version1: VersionType;
}