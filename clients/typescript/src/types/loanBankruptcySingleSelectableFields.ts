import { LoanBankruptcyFields } from "./loanBankruptcyFields";
import { VersionType } from "./versionType";

export interface LoanBankruptcySingleSelectableFields {
    includeAllLoanBankruptcyFields: boolean | null;
    loanBankruptcyFields: LoanBankruptcyFields;
    version1: VersionType;
}