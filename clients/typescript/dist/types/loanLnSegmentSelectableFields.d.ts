import { LoanLnSegmentFields } from "./loanLnSegmentFields";
import { LoanLnSegmentBillingSelectableFields } from "./loanLnSegmentBillingSelectableFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface LoanLnSegmentSelectableFields {
    includeAllLoanLnSegmentFieldsValue: boolean;
    includeAllLoanLnSegmentFieldsValueSpecified: boolean;
    includeAllLoanLnSegmentFields: boolean | null;
    loanLnSegmentFields: LoanLnSegmentFields;
    loanLnSegmentBillingSelectableFields: LoanLnSegmentBillingSelectableFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
