import { WdFee } from "./wdFee";
export interface WdFeeList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    wdFee: WdFee[];
    wdFeeSpecified: boolean;
}
