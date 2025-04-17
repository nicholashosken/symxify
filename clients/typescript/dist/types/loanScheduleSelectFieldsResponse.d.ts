import { LoanSchedule } from "./loanSchedule";
import { VersionType } from "./versionType";
export interface LoanScheduleSelectFieldsResponse {
    loanSchedule: LoanSchedule;
    version1: VersionType;
    messageId: string;
}
