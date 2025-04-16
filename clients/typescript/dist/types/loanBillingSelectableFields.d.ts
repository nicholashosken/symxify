import { LoanBillingFields } from "./loanBillingFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface LoanBillingSelectableFields {
    includeAllLoanBillingFieldsValue: boolean;
    includeAllLoanBillingFieldsValueSpecified: boolean;
    includeAllLoanBillingFields: boolean | null;
    loanBillingFields: LoanBillingFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
