import { ExternalLoanTransfer } from "./externalLoanTransfer";

export interface ExternalLoanTransferList {
    hasReachedMaximumListSize: boolean | null;
    externalLoanTransfer: ExternalLoanTransfer[];
}