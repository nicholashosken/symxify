import { LoanLnSegmentBillingFields } from "./loanLnSegmentBillingFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface LoanLnSegmentBillingSingleSelectableFields {
    includeAllLoanLnSegmentBillingFieldsValue: boolean;
    includeAllLoanLnSegmentBillingFieldsValueSpecified: boolean;
    includeAllLoanLnSegmentBillingFields: boolean | null;
    loanLnSegmentBillingFields: LoanLnSegmentBillingFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}