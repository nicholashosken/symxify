import { LoanBankruptcyFields } from "./loanBankruptcyFields";
import { LoanBankruptcyPrepetitionBalSelectableFields } from "./loanBankruptcyPrepetitionBalSelectableFields";
import { VersionType } from "./versionType";

export interface LoanBankruptcySelectableFields {
    includeAllLoanBankruptcyFields: boolean | null;
    loanBankruptcyFields: LoanBankruptcyFields;
    loanBankruptcyPrepetitionBalSelectableFields: LoanBankruptcyPrepetitionBalSelectableFields;
    version1: VersionType;
}