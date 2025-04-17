import { LoanLnSegmentFields } from "./loanLnSegmentFields";
import { LoanLnSegmentBillingSelectableFields } from "./loanLnSegmentBillingSelectableFields";
import { VersionType } from "./versionType";

export interface LoanLnSegmentSelectableFields {
    includeAllLoanLnSegmentFields: boolean | null;
    loanLnSegmentFields: LoanLnSegmentFields;
    loanLnSegmentBillingSelectableFields: LoanLnSegmentBillingSelectableFields;
    version1: VersionType;
}