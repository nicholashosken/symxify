import { LoanTypeIdRangeFields } from "./loanTypeIdRangeFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface LoanTypeIdRangeSingleSelectableFields {
    includeAllLoanTypeIdRangeFieldsValue: boolean;
    includeAllLoanTypeIdRangeFieldsValueSpecified: boolean;
    includeAllLoanTypeIdRangeFields: boolean | null;
    loanTypeIdRangeFields: LoanTypeIdRangeFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
