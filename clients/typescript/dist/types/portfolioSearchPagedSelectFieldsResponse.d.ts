import { Portfolio } from "./portfolio";
import { VersionType } from "./versionType";
export interface PortfolioSearchPagedSelectFieldsResponse {
    portfolio: Portfolio[];
    token: string;
    version1: VersionType;
    messageId: string;
}
