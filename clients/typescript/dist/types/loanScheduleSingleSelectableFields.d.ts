import { LoanScheduleFields } from "./loanScheduleFields";
import { VersionType } from "./versionType";
export interface LoanScheduleSingleSelectableFields {
    includeAllLoanScheduleFields: boolean | null;
    loanScheduleFields: LoanScheduleFields;
    version1: VersionType;
}
