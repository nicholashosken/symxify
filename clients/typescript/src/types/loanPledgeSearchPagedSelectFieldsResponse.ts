import { LoanPledge } from "./loanPledge";
import { VersionType } from "./versionType";

export interface LoanPledgeSearchPagedSelectFieldsResponse {
    loanPledge: LoanPledge[];
    token: string;
    version1: VersionType;
    messageId: string;
}