import { PortfolioHold } from "./portfolioHold";

export interface PortfolioHoldList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    portfolioHold: PortfolioHold[];
    portfolioHoldSpecified: boolean;
}