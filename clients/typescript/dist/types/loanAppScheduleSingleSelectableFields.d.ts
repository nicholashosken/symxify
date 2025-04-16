import { LoanAppScheduleFields } from "./loanAppScheduleFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface LoanAppScheduleSingleSelectableFields {
    includeAllLoanAppScheduleFieldsValue: boolean;
    includeAllLoanAppScheduleFieldsValueSpecified: boolean;
    includeAllLoanAppScheduleFields: boolean | null;
    loanAppScheduleFields: LoanAppScheduleFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
