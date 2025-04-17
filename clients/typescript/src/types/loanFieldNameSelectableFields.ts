import { LoanFieldNameFields } from "./loanFieldNameFields";
import { VersionType } from "./versionType";

export interface LoanFieldNameSelectableFields {
    includeAllLoanFieldNameFields: boolean | null;
    loanFieldNameFields: LoanFieldNameFields;
    version1: VersionType;
}