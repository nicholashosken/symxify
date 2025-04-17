import { LoanPledgeName } from "./loanPledgeName";
import { VersionType } from "./versionType";

export interface LoanPledgeNameSelectFieldsResponse {
    loanPledgeName: LoanPledgeName;
    version1: VersionType;
    messageId: string;
}