import { Portfolio } from "./portfolio";
export interface PortfolioList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    portfolio: Portfolio[];
    portfolioSpecified: boolean;
}
