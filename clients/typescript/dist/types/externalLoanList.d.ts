import { ExternalLoan } from "./externalLoan";
export interface ExternalLoanList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    externalLoan: ExternalLoan[];
    externalLoanSpecified: boolean;
}
