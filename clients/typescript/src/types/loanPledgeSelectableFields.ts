import { LoanPledgeFields } from "./loanPledgeFields";
import { LoanPledgeNameSelectableFields } from "./loanPledgeNameSelectableFields";
import { VersionType } from "./versionType";

export interface LoanPledgeSelectableFields {
    includeAllLoanPledgeFields: boolean | null;
    loanPledgeFields: LoanPledgeFields;
    loanPledgeNameSelectableFields: LoanPledgeNameSelectableFields;
    version1: VersionType;
}