import { ReservePlanTransaction } from "./reservePlanTransaction";

export interface ReservePlanTransactionList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    reservePlanTransaction: ReservePlanTransaction[];
    reservePlanTransactionSpecified: boolean;
}