import { LoanPledgeNameFields } from "./loanPledgeNameFields";
import { VersionType } from "./versionType";

export interface LoanPledgeNameSingleSelectableFields {
    includeAllLoanPledgeNameFields: boolean | null;
    loanPledgeNameFields: LoanPledgeNameFields;
    version1: VersionType;
}