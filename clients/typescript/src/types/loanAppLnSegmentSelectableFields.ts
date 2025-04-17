import { LoanAppLnSegmentFields } from "./loanAppLnSegmentFields";
import { VersionType } from "./versionType";

export interface LoanAppLnSegmentSelectableFields {
    includeAllLoanAppLnSegmentFields: boolean | null;
    loanAppLnSegmentFields: LoanAppLnSegmentFields;
    version1: VersionType;
}