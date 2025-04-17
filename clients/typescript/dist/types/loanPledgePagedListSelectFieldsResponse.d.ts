import { LoanPledge } from "./loanPledge";
import { VersionType } from "./versionType";
export interface LoanPledgePagedListSelectFieldsResponse {
    loanPledge: LoanPledge[];
    token: string;
    version1: VersionType;
    messageId: string;
}
