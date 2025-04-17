import { PortfolioTracking } from "./portfolioTracking";
import { VersionType } from "./versionType";
export interface PortfolioTrackingSearchPagedSelectFieldsResponse {
    portfolioTracking: PortfolioTracking[];
    token: string;
    version1: VersionType;
    messageId: string;
}
