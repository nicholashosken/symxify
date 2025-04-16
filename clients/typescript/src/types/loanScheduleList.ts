import { LoanSchedule } from "./loanSchedule";

export interface LoanScheduleList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    loanSchedule: LoanSchedule[];
    loanScheduleSpecified: boolean;
}