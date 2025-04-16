import { TellerFee } from "./tellerFee";

export interface TellerFeeList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    tellerFee: TellerFee[];
    tellerFeeSpecified: boolean;
}