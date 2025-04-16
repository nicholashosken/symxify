import { LoanBankruptcyFields } from "./loanBankruptcyFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface LoanBankruptcySingleSelectableFields {
    includeAllLoanBankruptcyFieldsValue: boolean;
    includeAllLoanBankruptcyFieldsValueSpecified: boolean;
    includeAllLoanBankruptcyFields: boolean | null;
    loanBankruptcyFields: LoanBankruptcyFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
