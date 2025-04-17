import { LoanAppCopiedFldsCopiedField_2 } from "./loanAppCopiedFldsCopiedField_2";
import { LoanAppCopiedFldsSubField_2 } from "./loanAppCopiedFldsSubField_2";
import { VersionType } from "./versionType";

export interface LoanAppCopiedFlds_2 {
    applicationType: number | null;
    copiedField: LoanAppCopiedFldsCopiedField_2[];
    subField: LoanAppCopiedFldsSubField_2[];
    version1: VersionType;
}