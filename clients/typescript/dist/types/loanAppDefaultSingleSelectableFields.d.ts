import { LoanAppDefaultFields } from "./loanAppDefaultFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface LoanAppDefaultSingleSelectableFields {
    includeAllLoanAppDefaultFieldsValue: boolean;
    includeAllLoanAppDefaultFieldsValueSpecified: boolean;
    includeAllLoanAppDefaultFields: boolean | null;
    loanAppDefaultFields: LoanAppDefaultFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
