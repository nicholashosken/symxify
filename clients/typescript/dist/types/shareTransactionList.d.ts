import { ShareTransaction } from "./shareTransaction";
export interface ShareTransactionList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    shareTransaction: ShareTransaction[];
    shareTransactionSpecified: boolean;
}
