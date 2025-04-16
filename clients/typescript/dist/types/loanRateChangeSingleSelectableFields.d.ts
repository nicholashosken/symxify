import { LoanRateChangeFields } from "./loanRateChangeFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface LoanRateChangeSingleSelectableFields {
    includeAllLoanRateChangeFieldsValue: boolean;
    includeAllLoanRateChangeFieldsValueSpecified: boolean;
    includeAllLoanRateChangeFields: boolean | null;
    loanRateChangeFields: LoanRateChangeFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
