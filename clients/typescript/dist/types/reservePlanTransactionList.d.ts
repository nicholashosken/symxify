import { ReservePlanTransaction } from "./reservePlanTransaction";
export interface ReservePlanTransactionList {
    hasReachedMaximumListSize: boolean | null;
    reservePlanTransaction: ReservePlanTransaction[];
}
