import { LoanApp } from "./loanApp";
import { VersionType } from "./versionType";
export interface LoanAppPagedListSelectFieldsResponse {
    loanApp: LoanApp[];
    token: string;
    version1: VersionType;
    messageId: string;
}
