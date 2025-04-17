import { LoanAppFinance } from "./loanAppFinance";
import { VersionType } from "./versionType";

export interface LoanAppFinanceSelectFieldsResponse {
    loanAppFinance: LoanAppFinance;
    version1: VersionType;
    messageId: string;
}