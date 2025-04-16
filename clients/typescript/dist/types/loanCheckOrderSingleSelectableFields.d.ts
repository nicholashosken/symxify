import { LoanCheckOrderFields } from "./loanCheckOrderFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface LoanCheckOrderSingleSelectableFields {
    includeAllLoanCheckOrderFieldsValue: boolean;
    includeAllLoanCheckOrderFieldsValueSpecified: boolean;
    includeAllLoanCheckOrderFields: boolean | null;
    loanCheckOrderFields: LoanCheckOrderFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
