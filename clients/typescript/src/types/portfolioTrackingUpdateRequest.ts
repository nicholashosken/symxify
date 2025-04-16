import { PortfolioTrackingFields_2 } from "./portfolioTrackingFields_2";

export interface PortfolioTrackingUpdateRequest {
    portfolioTrackingLocatorValue: number;
    portfolioTrackingLocatorValueSpecified: boolean;
    portfolioTrackingLocator: number | null;
    portfolioTrackingFields: PortfolioTrackingFields_2;
}