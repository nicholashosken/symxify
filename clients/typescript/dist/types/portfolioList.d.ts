import { Portfolio } from "./portfolio";
export interface PortfolioList {
    hasReachedMaximumListSize: boolean | null;
    portfolio: Portfolio[];
}
