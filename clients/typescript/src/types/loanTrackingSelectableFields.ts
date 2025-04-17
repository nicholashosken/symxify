import { LoanTrackingFields } from "./loanTrackingFields";
import { VersionType } from "./versionType";

export interface LoanTrackingSelectableFields {
    includeAllLoanTrackingFields: boolean | null;
    loanTrackingFields: LoanTrackingFields;
    version1: VersionType;
}