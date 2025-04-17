import { LoanAppPerson } from "./loanAppPerson";
import { VersionType } from "./versionType";

export interface LoanAppPersonSearchPagedSelectFieldsResponse {
    loanAppPerson: LoanAppPerson[];
    token: string;
    version1: VersionType;
    messageId: string;
}