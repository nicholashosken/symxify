import { LoanPledgeFields } from "./loanPledgeFields";
import { VersionType } from "./versionType";

export interface LoanPledgeSingleSelectableFields {
    includeAllLoanPledgeFields: boolean | null;
    loanPledgeFields: LoanPledgeFields;
    version1: VersionType;
}