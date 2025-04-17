import { Loan } from "./loan";
export interface LoanList {
    hasReachedMaximumListSize: boolean | null;
    loan: Loan[];
}
