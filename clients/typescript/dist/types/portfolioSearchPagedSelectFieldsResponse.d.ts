import { Portfolio } from "./portfolio";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface PortfolioSearchPagedSelectFieldsResponse {
    portfolio: Portfolio[];
    portfolioSpecified: boolean;
    token: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
