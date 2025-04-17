import { LoanAppPledge } from "./loanAppPledge";
import { VersionType } from "./versionType";
export interface LoanAppPledgePagedListSelectFieldsResponse {
    loanAppPledge: LoanAppPledge[];
    token: string;
    version1: VersionType;
    messageId: string;
}
