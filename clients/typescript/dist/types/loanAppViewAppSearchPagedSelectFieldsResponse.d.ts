import { LoanAppViewApp } from "./loanAppViewApp";
import { VersionType } from "./versionType";
export interface LoanAppViewAppSearchPagedSelectFieldsResponse {
    loanAppViewApp: LoanAppViewApp[];
    token: string;
    version1: VersionType;
    messageId: string;
}
