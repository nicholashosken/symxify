import { ExternalLoanTransfer } from "./externalLoanTransfer";
export interface ExternalLoanTransferList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    externalLoanTransfer: ExternalLoanTransfer[];
    externalLoanTransferSpecified: boolean;
}
