import { LoanApp } from "./loanApp";
import { VersionType } from "./versionType";
export interface LoanAppSelectFieldsFilterChildrenResponse {
    loanApp: LoanApp;
    version1: VersionType;
    messageId: string;
}
