import { LoanAppTrackingFields } from "./loanAppTrackingFields";
import { VersionType } from "./versionType";

export interface LoanAppTrackingSingleSelectableFields {
    includeAllLoanAppTrackingFields: boolean | null;
    loanAppTrackingFields: LoanAppTrackingFields;
    version1: VersionType;
}