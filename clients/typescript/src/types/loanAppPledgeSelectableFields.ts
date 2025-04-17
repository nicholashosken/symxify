import { LoanAppPledgeFields } from "./loanAppPledgeFields";
import { VersionType } from "./versionType";

export interface LoanAppPledgeSelectableFields {
    includeAllLoanAppPledgeFields: boolean | null;
    loanAppPledgeFields: LoanAppPledgeFields;
    version1: VersionType;
}