import { LoanSchedule } from "./loanSchedule";
export interface LoanScheduleList {
    hasReachedMaximumListSize: boolean | null;
    loanSchedule: LoanSchedule[];
}
