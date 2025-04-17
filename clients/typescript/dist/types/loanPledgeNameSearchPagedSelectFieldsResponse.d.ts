import { LoanPledgeName } from "./loanPledgeName";
import { VersionType } from "./versionType";
export interface LoanPledgeNameSearchPagedSelectFieldsResponse {
    loanPledgeName: LoanPledgeName[];
    token: string;
    version1: VersionType;
    messageId: string;
}
