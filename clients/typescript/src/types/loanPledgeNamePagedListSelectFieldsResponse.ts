import { LoanPledgeName } from "./loanPledgeName";
import { VersionType } from "./versionType";

export interface LoanPledgeNamePagedListSelectFieldsResponse {
    loanPledgeName: LoanPledgeName[];
    token: string;
    version1: VersionType;
    messageId: string;
}