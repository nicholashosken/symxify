import { LoanAppTrackingFields } from "./loanAppTrackingFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface LoanAppTrackingSingleSelectableFields {
    includeAllLoanAppTrackingFieldsValue: boolean;
    includeAllLoanAppTrackingFieldsValueSpecified: boolean;
    includeAllLoanAppTrackingFields: boolean | null;
    loanAppTrackingFields: LoanAppTrackingFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
