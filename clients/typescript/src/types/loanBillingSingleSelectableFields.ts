import { LoanBillingFields } from "./loanBillingFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface LoanBillingSingleSelectableFields {
    includeAllLoanBillingFieldsValue: boolean;
    includeAllLoanBillingFieldsValueSpecified: boolean;
    includeAllLoanBillingFields: boolean | null;
    loanBillingFields: LoanBillingFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}