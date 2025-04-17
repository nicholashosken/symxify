import { LoanAppViewApp } from "./loanAppViewApp";
import { VersionType } from "./versionType";

export interface LoanAppViewAppSelectFieldsResponse {
    loanAppViewApp: LoanAppViewApp;
    version1: VersionType;
    messageId: string;
}