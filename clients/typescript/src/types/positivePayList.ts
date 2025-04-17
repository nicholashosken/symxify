import { PositivePay } from "./positivePay";

export interface PositivePayList {
    hasReachedMaximumListSize: boolean | null;
    positivePay: PositivePay[];
}