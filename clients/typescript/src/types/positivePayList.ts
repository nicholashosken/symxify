import { PositivePay } from "./positivePay";

export interface PositivePayList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    positivePay: PositivePay[];
    positivePaySpecified: boolean;
}