import { DebtRatio } from "./debtRatio";
export interface DebtRatioList {
    hasReachedMaximumListSize: boolean | null;
    debtRatio: DebtRatio[];
}
