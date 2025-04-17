import { Portfolio } from "./portfolio";
import { VersionType } from "./versionType";
export interface PortfolioSelectFieldsFilterChildrenResponse {
    portfolio: Portfolio;
    version1: VersionType;
    messageId: string;
}
