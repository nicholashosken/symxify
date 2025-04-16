import { LoanTrackingFields } from "./loanTrackingFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface LoanTrackingSingleSelectableFields {
    includeAllLoanTrackingFieldsValue: boolean;
    includeAllLoanTrackingFieldsValueSpecified: boolean;
    includeAllLoanTrackingFields: boolean | null;
    loanTrackingFields: LoanTrackingFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}