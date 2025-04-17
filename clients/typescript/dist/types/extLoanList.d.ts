import { ExtLoan } from "./extLoan";
export interface ExtLoanList {
    hasReachedMaximumListSize: boolean | null;
    extLoan: ExtLoan[];
}
