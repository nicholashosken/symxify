import { LoanAppScheduleFields } from "./loanAppScheduleFields";
import { VersionType } from "./versionType";
export interface LoanAppScheduleSelectableFields {
    includeAllLoanAppScheduleFields: boolean | null;
    loanAppScheduleFields: LoanAppScheduleFields;
    version1: VersionType;
}
