import { Portfolio } from "./portfolio";
import { VersionType } from "./versionType";

export interface PortfolioPagedListSelectFieldsResponse {
    portfolio: Portfolio[];
    token: string;
    version1: VersionType;
    messageId: string;
}