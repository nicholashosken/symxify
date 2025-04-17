import { ItcFraud } from "./itcFraud";
export interface ItcFraudList {
    hasReachedMaximumListSize: boolean | null;
    itcFraud: ItcFraud[];
}
