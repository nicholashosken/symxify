import { LoanAppPrintApp } from "./loanAppPrintApp";
import { VersionType } from "./versionType";

export interface LoanAppPrintAppSearchPagedSelectFieldsResponse {
    loanAppPrintApp: LoanAppPrintApp[];
    token: string;
    version1: VersionType;
    messageId: string;
}