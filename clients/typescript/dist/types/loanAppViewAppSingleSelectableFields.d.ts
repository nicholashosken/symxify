import { LoanAppViewAppFields } from "./loanAppViewAppFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface LoanAppViewAppSingleSelectableFields {
    includeAllLoanAppViewAppFieldsValue: boolean;
    includeAllLoanAppViewAppFieldsValueSpecified: boolean;
    includeAllLoanAppViewAppFields: boolean | null;
    loanAppViewAppFields: LoanAppViewAppFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
