import { LoanApp } from "./loanApp";
import { VersionType } from "./versionType";

export interface LoanAppSelectFieldsResponse {
    loanApp: LoanApp;
    version1: VersionType;
    messageId: string;
}