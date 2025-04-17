import { LoanAppPrintApp } from "./loanAppPrintApp";
import { VersionType } from "./versionType";

export interface LoanAppPrintAppSelectFieldsResponse {
    loanAppPrintApp: LoanAppPrintApp;
    version1: VersionType;
    messageId: string;
}