import { PortfolioHoldFields } from "./portfolioHoldFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface PortfolioHoldSelectableFields {
    includeAllPortfolioHoldFieldsValue: boolean;
    includeAllPortfolioHoldFieldsValueSpecified: boolean;
    includeAllPortfolioHoldFields: boolean | null;
    portfolioHoldFields: PortfolioHoldFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
