import { LoanBankruptcy } from "./loanBankruptcy";
import { VersionType } from "./versionType";

export interface LoanBankruptcySelectFieldsResponse {
    loanBankruptcy: LoanBankruptcy;
    version1: VersionType;
    messageId: string;
}