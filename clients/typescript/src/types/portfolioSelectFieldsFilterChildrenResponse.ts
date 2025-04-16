import { Portfolio } from "./portfolio";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface PortfolioSelectFieldsFilterChildrenResponse {
    portfolio: Portfolio;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}