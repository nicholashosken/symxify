import { LoanAppCopiedFldsCopiedField } from "./loanAppCopiedFldsCopiedField";
import { LoanAppCopiedFldsSubField } from "./loanAppCopiedFldsSubField";
import { VersionType } from "./versionType";

export interface LoanAppCopiedFlds {
    applicationType: number | null;
    copiedField: LoanAppCopiedFldsCopiedField[];
    subField: LoanAppCopiedFldsSubField[];
    version1: VersionType;
}