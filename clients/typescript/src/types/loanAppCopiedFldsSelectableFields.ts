import { LoanAppCopiedFldsFields } from "./loanAppCopiedFldsFields";
import { VersionType } from "./versionType";

export interface LoanAppCopiedFldsSelectableFields {
    includeAllLoanAppCopiedFldsFields: boolean | null;
    loanAppCopiedFldsFields: LoanAppCopiedFldsFields;
    version1: VersionType;
}