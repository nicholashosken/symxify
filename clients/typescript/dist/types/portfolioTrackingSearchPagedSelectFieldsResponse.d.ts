import { PortfolioTracking } from "./portfolioTracking";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface PortfolioTrackingSearchPagedSelectFieldsResponse {
    portfolioTracking: PortfolioTracking[];
    portfolioTrackingSpecified: boolean;
    token: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
