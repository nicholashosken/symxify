import { DebtRatio } from "./debtRatio";
export interface DebtRatioList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    debtRatio: DebtRatio[];
    debtRatioSpecified: boolean;
}
