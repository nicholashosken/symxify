import { PortfolioTracking } from "./portfolioTracking";
import { VersionType } from "./versionType";
export interface PortfolioTrackingSelectFieldsResponse {
    portfolioTracking: PortfolioTracking;
    version1: VersionType;
    messageId: string;
}
