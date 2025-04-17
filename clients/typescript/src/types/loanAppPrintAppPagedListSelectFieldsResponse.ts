import { LoanAppPrintApp } from "./loanAppPrintApp";
import { VersionType } from "./versionType";

export interface LoanAppPrintAppPagedListSelectFieldsResponse {
    loanAppPrintApp: LoanAppPrintApp[];
    token: string;
    version1: VersionType;
    messageId: string;
}