import { Portfolio } from "./portfolio";
import { VersionType } from "./versionType";

export interface PortfolioSelectFieldsResponse {
    portfolio: Portfolio;
    version1: VersionType;
    messageId: string;
}