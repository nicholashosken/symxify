import { LoanAppCopiedFldsCopiedField_2 } from "./loanAppCopiedFldsCopiedField_2";
import { LoanAppCopiedFldsSubField_2 } from "./loanAppCopiedFldsSubField_2";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface LoanAppCopiedFlds_2 {
    applicationTypeValue: number;
    applicationTypeValueSpecified: boolean;
    applicationType: number | null;
    copiedField: LoanAppCopiedFldsCopiedField_2[];
    copiedFieldSpecified: boolean;
    subField: LoanAppCopiedFldsSubField_2[];
    subFieldSpecified: boolean;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
