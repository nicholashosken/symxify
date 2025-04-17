import { LoanAppTrackingFields } from "./loanAppTrackingFields";
import { VersionType } from "./versionType";
export interface LoanAppTrackingSelectableFields {
    includeAllLoanAppTrackingFields: boolean | null;
    loanAppTrackingFields: LoanAppTrackingFields;
    version1: VersionType;
}
