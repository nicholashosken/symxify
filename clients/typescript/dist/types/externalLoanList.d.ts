import { ExternalLoan } from "./externalLoan";
export interface ExternalLoanList {
    hasReachedMaximumListSize: boolean | null;
    externalLoan: ExternalLoan[];
}
