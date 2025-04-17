import { PortfolioHold } from "./portfolioHold";

export interface PortfolioHoldList {
    hasReachedMaximumListSize: boolean | null;
    portfolioHold: PortfolioHold[];
}