import { LoanAppSchedule } from "./loanAppSchedule";

export interface LoanAppScheduleList {
    hasReachedMaximumListSize: boolean | null;
    loanAppSchedule: LoanAppSchedule[];
}