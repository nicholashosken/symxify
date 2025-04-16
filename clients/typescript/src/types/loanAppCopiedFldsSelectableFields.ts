import { LoanAppCopiedFldsFields } from "./loanAppCopiedFldsFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface LoanAppCopiedFldsSelectableFields {
    includeAllLoanAppCopiedFldsFieldsValue: boolean;
    includeAllLoanAppCopiedFldsFieldsValueSpecified: boolean;
    includeAllLoanAppCopiedFldsFields: boolean | null;
    loanAppCopiedFldsFields: LoanAppCopiedFldsFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}