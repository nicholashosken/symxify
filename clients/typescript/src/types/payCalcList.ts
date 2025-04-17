import { PayCalc } from "./payCalc";

export interface PayCalcList {
    hasReachedMaximumListSize: boolean | null;
    payCalc: PayCalc[];
}