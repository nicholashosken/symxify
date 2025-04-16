import { LoanAppFields } from "./loanAppFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface LoanAppSingleSelectableFields {
    includeAllLoanAppFieldsValue: boolean;
    includeAllLoanAppFieldsValueSpecified: boolean;
    includeAllLoanAppFields: boolean | null;
    loanAppFields: LoanAppFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
