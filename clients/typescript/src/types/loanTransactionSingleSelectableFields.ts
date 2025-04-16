import { LoanTransactionFields } from "./loanTransactionFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface LoanTransactionSingleSelectableFields {
    includeAllLoanTransactionFieldsValue: boolean;
    includeAllLoanTransactionFieldsValueSpecified: boolean;
    includeAllLoanTransactionFields: boolean | null;
    loanTransactionFields: LoanTransactionFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}