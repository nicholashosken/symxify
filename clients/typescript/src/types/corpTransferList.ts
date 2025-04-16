import { CorpTransfer } from "./corpTransfer";

export interface CorpTransferList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    corpTransfer: CorpTransfer[];
    corpTransferSpecified: boolean;
}