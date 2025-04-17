import { LoanSchedule } from "./loanSchedule";
import { VersionType } from "./versionType";
export interface LoanScheduleSearchPagedSelectFieldsResponse {
    loanSchedule: LoanSchedule[];
    token: string;
    version1: VersionType;
    messageId: string;
}
