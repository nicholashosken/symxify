import { OnlineFee } from "./onlineFee";
export interface OnlineFeeList {
    hasReachedMaximumListSize: boolean | null;
    onlineFee: OnlineFee[];
}
