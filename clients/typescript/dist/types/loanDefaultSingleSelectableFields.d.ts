import { LoanDefaultFields } from "./loanDefaultFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface LoanDefaultSingleSelectableFields {
    includeAllLoanDefaultFieldsValue: boolean;
    includeAllLoanDefaultFieldsValueSpecified: boolean;
    includeAllLoanDefaultFields: boolean | null;
    loanDefaultFields: LoanDefaultFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
