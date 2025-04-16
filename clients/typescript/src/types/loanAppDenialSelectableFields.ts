import { LoanAppDenialFields } from "./loanAppDenialFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface LoanAppDenialSelectableFields {
    includeAllLoanAppDenialFieldsValue: boolean;
    includeAllLoanAppDenialFieldsValueSpecified: boolean;
    includeAllLoanAppDenialFields: boolean | null;
    loanAppDenialFields: LoanAppDenialFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}