import { LoanAppReusedFldsFields } from "./loanAppReusedFldsFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface LoanAppReusedFldsSingleSelectableFields {
    includeAllLoanAppReusedFldsFieldsValue: boolean;
    includeAllLoanAppReusedFldsFieldsValueSpecified: boolean;
    includeAllLoanAppReusedFldsFields: boolean | null;
    loanAppReusedFldsFields: LoanAppReusedFldsFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}