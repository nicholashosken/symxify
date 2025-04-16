import { LoanBankruptcyFields } from "./loanBankruptcyFields";
import { LoanBankruptcyPrepetitionBalSelectableFields } from "./loanBankruptcyPrepetitionBalSelectableFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface LoanBankruptcySelectableFields {
    includeAllLoanBankruptcyFieldsValue: boolean;
    includeAllLoanBankruptcyFieldsValueSpecified: boolean;
    includeAllLoanBankruptcyFields: boolean | null;
    loanBankruptcyFields: LoanBankruptcyFields;
    loanBankruptcyPrepetitionBalSelectableFields: LoanBankruptcyPrepetitionBalSelectableFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}