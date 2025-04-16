import { LoanAppCopiedFldsCopiedField } from "./loanAppCopiedFldsCopiedField";
import { LoanAppCopiedFldsSubField } from "./loanAppCopiedFldsSubField";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface LoanAppCopiedFlds {
    applicationTypeValue: number;
    applicationTypeValueSpecified: boolean;
    applicationType: number | null;
    copiedField: LoanAppCopiedFldsCopiedField[];
    copiedFieldSpecified: boolean;
    subField: LoanAppCopiedFldsSubField[];
    subFieldSpecified: boolean;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}