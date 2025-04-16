import { LoanAppReusedFldsReusedField_2 } from "./loanAppReusedFldsReusedField_2";
import { LoanAppReusedFldsSubField_2 } from "./loanAppReusedFldsSubField_2";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface LoanAppReusedFlds_2 {
    applicationTypeValue: number;
    applicationTypeValueSpecified: boolean;
    applicationType: number | null;
    reusedField: LoanAppReusedFldsReusedField_2[];
    reusedFieldSpecified: boolean;
    subField: LoanAppReusedFldsSubField_2[];
    subFieldSpecified: boolean;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}