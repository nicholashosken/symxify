import { PortfolioTracking } from "./portfolioTracking";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface PortfolioTrackingSelectFieldsResponse {
    portfolioTracking: PortfolioTracking;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}