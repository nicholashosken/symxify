import { PortfolioTracking } from "./portfolioTracking";
import { VersionType } from "./versionType";
export interface PortfolioTrackingPagedListSelectFieldsResponse {
    portfolioTracking: PortfolioTracking[];
    token: string;
    version1: VersionType;
    messageId: string;
}
