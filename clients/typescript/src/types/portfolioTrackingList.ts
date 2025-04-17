import { PortfolioTracking } from "./portfolioTracking";

export interface PortfolioTrackingList {
    hasReachedMaximumListSize: boolean | null;
    portfolioTracking: PortfolioTracking[];
}