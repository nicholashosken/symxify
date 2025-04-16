import { LoanLnSegmentBillingFilter } from "./loanLnSegmentBillingFilter";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface LoanLnSegmentChildrenFilter {
    loanLnSegmentBillingFilter: LoanLnSegmentBillingFilter;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
