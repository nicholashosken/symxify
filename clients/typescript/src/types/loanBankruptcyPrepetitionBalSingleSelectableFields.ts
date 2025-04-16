import { LoanBankruptcyPrepetitionBalFields } from "./loanBankruptcyPrepetitionBalFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface LoanBankruptcyPrepetitionBalSingleSelectableFields {
    includeAllLoanBankruptcyPrepetitionBalFieldsValue: boolean;
    includeAllLoanBankruptcyPrepetitionBalFieldsValueSpecified: boolean;
    includeAllLoanBankruptcyPrepetitionBalFields: boolean | null;
    loanBankruptcyPrepetitionBalFields: LoanBankruptcyPrepetitionBalFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}