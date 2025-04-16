import { LoanHoldFields } from "./loanHoldFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface LoanHoldSelectableFields {
    includeAllLoanHoldFieldsValue: boolean;
    includeAllLoanHoldFieldsValueSpecified: boolean;
    includeAllLoanHoldFields: boolean | null;
    loanHoldFields: LoanHoldFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}