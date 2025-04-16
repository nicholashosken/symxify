import { PortfolioFields } from "./portfolioFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface PortfolioSingleSelectableFields {
    includeAllPortfolioFieldsValue: boolean;
    includeAllPortfolioFieldsValueSpecified: boolean;
    includeAllPortfolioFields: boolean | null;
    portfolioFields: PortfolioFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}