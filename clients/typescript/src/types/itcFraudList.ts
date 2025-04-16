import { ItcFraud } from "./itcFraud";

export interface ItcFraudList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    itcFraud: ItcFraud[];
    itcFraudSpecified: boolean;
}