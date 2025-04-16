import { LoanAppPersonFields } from "./loanAppPersonFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface LoanAppPersonSelectableFields {
    includeAllLoanAppPersonFieldsValue: boolean;
    includeAllLoanAppPersonFieldsValueSpecified: boolean;
    includeAllLoanAppPersonFields: boolean | null;
    loanAppPersonFields: LoanAppPersonFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
