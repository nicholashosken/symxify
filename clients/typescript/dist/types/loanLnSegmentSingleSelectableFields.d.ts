import { LoanLnSegmentFields } from "./loanLnSegmentFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface LoanLnSegmentSingleSelectableFields {
    includeAllLoanLnSegmentFieldsValue: boolean;
    includeAllLoanLnSegmentFieldsValueSpecified: boolean;
    includeAllLoanLnSegmentFields: boolean | null;
    loanLnSegmentFields: LoanLnSegmentFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
