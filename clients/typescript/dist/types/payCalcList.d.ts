import { PayCalc } from "./payCalc";
export interface PayCalcList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    payCalc: PayCalc[];
    payCalcSpecified: boolean;
}
