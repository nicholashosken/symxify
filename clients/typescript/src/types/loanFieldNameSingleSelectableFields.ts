import { LoanFieldNameFields } from "./loanFieldNameFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface LoanFieldNameSingleSelectableFields {
    includeAllLoanFieldNameFieldsValue: boolean;
    includeAllLoanFieldNameFieldsValueSpecified: boolean;
    includeAllLoanFieldNameFields: boolean | null;
    loanFieldNameFields: LoanFieldNameFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}