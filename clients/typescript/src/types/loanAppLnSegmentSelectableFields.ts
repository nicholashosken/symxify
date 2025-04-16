import { LoanAppLnSegmentFields } from "./loanAppLnSegmentFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface LoanAppLnSegmentSelectableFields {
    includeAllLoanAppLnSegmentFieldsValue: boolean;
    includeAllLoanAppLnSegmentFieldsValueSpecified: boolean;
    includeAllLoanAppLnSegmentFields: boolean | null;
    loanAppLnSegmentFields: LoanAppLnSegmentFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}