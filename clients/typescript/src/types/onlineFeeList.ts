import { OnlineFee } from "./onlineFee";

export interface OnlineFeeList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    onlineFee: OnlineFee[];
    onlineFeeSpecified: boolean;
}