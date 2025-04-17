import { PortfolioHold } from "./portfolioHold";
import { VersionType } from "./versionType";

export interface PortfolioHoldPagedListSelectFieldsResponse {
    portfolioHold: PortfolioHold[];
    token: string;
    version1: VersionType;
    messageId: string;
}