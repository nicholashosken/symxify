import { ExtLoan } from "./extLoan";

export interface ExtLoanList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    extLoan: ExtLoan[];
    extLoanSpecified: boolean;
}