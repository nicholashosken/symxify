import { LoanAppFieldNameFields } from "./loanAppFieldNameFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface LoanAppFieldNameSelectableFields {
    includeAllLoanAppFieldNameFieldsValue: boolean;
    includeAllLoanAppFieldNameFieldsValueSpecified: boolean;
    includeAllLoanAppFieldNameFields: boolean | null;
    loanAppFieldNameFields: LoanAppFieldNameFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
