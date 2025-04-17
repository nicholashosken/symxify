import { LoanAppPerson } from "./loanAppPerson";
import { VersionType } from "./versionType";
export interface LoanAppPersonSelectFieldsResponse {
    loanAppPerson: LoanAppPerson;
    version1: VersionType;
    messageId: string;
}
