import { LoanAppReusedFldsReusedField } from "./loanAppReusedFldsReusedField";
import { LoanAppReusedFldsSubField } from "./loanAppReusedFldsSubField";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface LoanAppReusedFlds {
    applicationTypeValue: number;
    applicationTypeValueSpecified: boolean;
    applicationType: number | null;
    reusedField: LoanAppReusedFldsReusedField[];
    reusedFieldSpecified: boolean;
    subField: LoanAppReusedFldsSubField[];
    subFieldSpecified: boolean;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
