import { LoanNameFields } from "./loanNameFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface LoanNameSingleSelectableFields {
    includeAllLoanNameFieldsValue: boolean;
    includeAllLoanNameFieldsValueSpecified: boolean;
    includeAllLoanNameFields: boolean | null;
    loanNameFields: LoanNameFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}