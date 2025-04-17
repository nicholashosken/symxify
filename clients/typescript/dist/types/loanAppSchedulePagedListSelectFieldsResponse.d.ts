import { LoanAppSchedule } from "./loanAppSchedule";
import { VersionType } from "./versionType";
export interface LoanAppSchedulePagedListSelectFieldsResponse {
    loanAppSchedule: LoanAppSchedule[];
    token: string;
    version1: VersionType;
    messageId: string;
}
