import { PortfolioHold } from "./portfolioHold";
import { VersionType } from "./versionType";

export interface PortfolioHoldSelectFieldsResponse {
    portfolioHold: PortfolioHold;
    version1: VersionType;
    messageId: string;
}