import { CorpTransfer } from "./corpTransfer";
export interface CorpTransferList {
    hasReachedMaximumListSize: boolean | null;
    corpTransfer: CorpTransfer[];
}
