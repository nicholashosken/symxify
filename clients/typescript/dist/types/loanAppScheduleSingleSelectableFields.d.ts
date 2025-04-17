import { LoanAppScheduleFields } from "./loanAppScheduleFields";
import { VersionType } from "./versionType";
export interface LoanAppScheduleSingleSelectableFields {
    includeAllLoanAppScheduleFields: boolean | null;
    loanAppScheduleFields: LoanAppScheduleFields;
    version1: VersionType;
}
