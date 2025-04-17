import { LoanAppPledge } from "./loanAppPledge";
import { VersionType } from "./versionType";
export interface LoanAppPledgeSelectFieldsResponse {
    loanAppPledge: LoanAppPledge;
    version1: VersionType;
    messageId: string;
}
