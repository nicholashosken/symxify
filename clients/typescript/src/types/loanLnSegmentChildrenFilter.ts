import { LoanLnSegmentBillingFilter } from "./loanLnSegmentBillingFilter";
import { VersionType } from "./versionType";

export interface LoanLnSegmentChildrenFilter {
    loanLnSegmentBillingFilter: LoanLnSegmentBillingFilter;
    version1: VersionType;
}