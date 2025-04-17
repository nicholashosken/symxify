import { LoanBankruptcy } from "./loanBankruptcy";
import { VersionType } from "./versionType";
export interface LoanBankruptcyPagedListSelectFieldsResponse {
    loanBankruptcy: LoanBankruptcy[];
    token: string;
    version1: VersionType;
    messageId: string;
}
