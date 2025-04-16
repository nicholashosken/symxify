import { PortfolioTrackingFields } from "./portfolioTrackingFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface PortfolioTrackingSingleSelectableFields {
    includeAllPortfolioTrackingFieldsValue: boolean;
    includeAllPortfolioTrackingFieldsValueSpecified: boolean;
    includeAllPortfolioTrackingFields: boolean | null;
    portfolioTrackingFields: PortfolioTrackingFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}