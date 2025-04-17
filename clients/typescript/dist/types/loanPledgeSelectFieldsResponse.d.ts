import { LoanPledge } from "./loanPledge";
import { VersionType } from "./versionType";
export interface LoanPledgeSelectFieldsResponse {
    loanPledge: LoanPledge;
    version1: VersionType;
    messageId: string;
}
