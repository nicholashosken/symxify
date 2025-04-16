import { LoanAppFinanceFields } from "./loanAppFinanceFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface LoanAppFinanceSelectableFields {
    includeAllLoanAppFinanceFieldsValue: boolean;
    includeAllLoanAppFinanceFieldsValueSpecified: boolean;
    includeAllLoanAppFinanceFields: boolean | null;
    loanAppFinanceFields: LoanAppFinanceFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
