import { LoanFields } from "./loanFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface LoanSingleSelectableFields {
    includeAllLoanFieldsValue: boolean;
    includeAllLoanFieldsValueSpecified: boolean;
    includeAllLoanFields: boolean | null;
    loanFields: LoanFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
