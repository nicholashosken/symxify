import { Portfolio } from "./portfolio";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface PortfolioPagedListSelectFieldsResponse {
    portfolio: Portfolio[];
    portfolioSpecified: boolean;
    token: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
