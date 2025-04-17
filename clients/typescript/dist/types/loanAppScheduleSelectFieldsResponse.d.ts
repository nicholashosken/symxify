import { LoanAppSchedule } from "./loanAppSchedule";
import { VersionType } from "./versionType";
export interface LoanAppScheduleSelectFieldsResponse {
    loanAppSchedule: LoanAppSchedule;
    version1: VersionType;
    messageId: string;
}
