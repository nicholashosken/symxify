import { WdFee } from "./wdFee";

export interface WdFeeList {
    hasReachedMaximumListSize: boolean | null;
    wdFee: WdFee[];
}