import { PortfolioHoldFilter } from "./portfolioHoldFilter";
import { PortfolioNoteFilter } from "./portfolioNoteFilter";
import { PortfolioTrackingFilter } from "./portfolioTrackingFilter";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface PortfolioChildrenFilter {
    portfolioHoldFilter: PortfolioHoldFilter;
    portfolioNoteFilter: PortfolioNoteFilter;
    portfolioTrackingFilter: PortfolioTrackingFilter;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
