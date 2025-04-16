import { Portfolio } from "./portfolio";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface PortfolioSelectFieldsResponse {
    portfolio: Portfolio;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}