import { LoanAppReusedFldsReusedField_2 } from "./loanAppReusedFldsReusedField_2";
import { LoanAppReusedFldsSubField_2 } from "./loanAppReusedFldsSubField_2";
import { VersionType } from "./versionType";

export interface LoanAppReusedFlds_2 {
    applicationType: number | null;
    reusedField: LoanAppReusedFldsReusedField_2[];
    subField: LoanAppReusedFldsSubField_2[];
    version1: VersionType;
}