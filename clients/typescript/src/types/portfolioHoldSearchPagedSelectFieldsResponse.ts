import { PortfolioHold } from "./portfolioHold";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface PortfolioHoldSearchPagedSelectFieldsResponse {
    portfolioHold: PortfolioHold[];
    portfolioHoldSpecified: boolean;
    token: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}