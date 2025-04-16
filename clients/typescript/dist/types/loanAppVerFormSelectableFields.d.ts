import { LoanAppVerFormFields } from "./loanAppVerFormFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface LoanAppVerFormSelectableFields {
    includeAllLoanAppVerFormFieldsValue: boolean;
    includeAllLoanAppVerFormFieldsValueSpecified: boolean;
    includeAllLoanAppVerFormFields: boolean | null;
    loanAppVerFormFields: LoanAppVerFormFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
