import { LoanTransferFields } from "./loanTransferFields";
import { VersionType } from "./versionType";
export interface LoanTransferSingleSelectableFields {
    includeAllLoanTransferFields: boolean | null;
    loanTransferFields: LoanTransferFields;
    version1: VersionType;
}
