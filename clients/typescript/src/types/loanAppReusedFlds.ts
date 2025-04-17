import { LoanAppReusedFldsReusedField } from "./loanAppReusedFldsReusedField";
import { LoanAppReusedFldsSubField } from "./loanAppReusedFldsSubField";
import { VersionType } from "./versionType";

export interface LoanAppReusedFlds {
    applicationType: number | null;
    reusedField: LoanAppReusedFldsReusedField[];
    subField: LoanAppReusedFldsSubField[];
    version1: VersionType;
}