import { LoanAppViewApp } from "./loanAppViewApp";
import { VersionType } from "./versionType";

export interface LoanAppViewAppPagedListSelectFieldsResponse {
    loanAppViewApp: LoanAppViewApp[];
    token: string;
    version1: VersionType;
    messageId: string;
}