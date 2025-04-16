import { LoanAppSchedule } from "./loanAppSchedule";
export interface LoanAppScheduleList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    loanAppSchedule: LoanAppSchedule[];
    loanAppScheduleSpecified: boolean;
}
