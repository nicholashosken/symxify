import { LoanAppPledge } from "./loanAppPledge";
import { VersionType } from "./versionType";

export interface LoanAppPledgeSearchPagedSelectFieldsResponse {
    loanAppPledge: LoanAppPledge[];
    token: string;
    version1: VersionType;
    messageId: string;
}