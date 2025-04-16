import { PortfolioHold } from "./portfolioHold";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface PortfolioHoldPagedListSelectFieldsResponse {
    portfolioHold: PortfolioHold[];
    portfolioHoldSpecified: boolean;
    token: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}