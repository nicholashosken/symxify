import { LoanAppPledgeFields } from "./loanAppPledgeFields";
import { VersionType } from "./versionType";

export interface LoanAppPledgeSingleSelectableFields {
    includeAllLoanAppPledgeFields: boolean | null;
    loanAppPledgeFields: LoanAppPledgeFields;
    version1: VersionType;
}