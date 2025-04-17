import { ShareTransaction } from "./shareTransaction";
export interface ShareTransactionList {
    hasReachedMaximumListSize: boolean | null;
    shareTransaction: ShareTransaction[];
}
