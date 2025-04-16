import { PortfolioTracking } from "./portfolioTracking";

export interface PortfolioTrackingList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    portfolioTracking: PortfolioTracking[];
    portfolioTrackingSpecified: boolean;
}