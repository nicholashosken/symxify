import { PortfolioTrackingFields_2 } from "./portfolioTrackingFields_2";

export interface PortfolioTrackingUpdateRequest {
    portfolioTrackingLocator: number | null;
    portfolioTrackingFields: PortfolioTrackingFields_2;
}