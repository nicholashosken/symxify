import { LoanTrackingFields } from "./loanTrackingFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface LoanTrackingSelectableFields {
    includeAllLoanTrackingFieldsValue: boolean;
    includeAllLoanTrackingFieldsValueSpecified: boolean;
    includeAllLoanTrackingFields: boolean | null;
    loanTrackingFields: LoanTrackingFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}