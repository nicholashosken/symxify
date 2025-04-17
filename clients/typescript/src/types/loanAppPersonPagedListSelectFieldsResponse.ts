import { LoanAppPerson } from "./loanAppPerson";
import { VersionType } from "./versionType";

export interface LoanAppPersonPagedListSelectFieldsResponse {
    loanAppPerson: LoanAppPerson[];
    token: string;
    version1: VersionType;
    messageId: string;
}