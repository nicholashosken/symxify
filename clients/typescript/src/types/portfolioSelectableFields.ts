import { PortfolioFields } from "./portfolioFields";
import { PortfolioHoldSelectableFields } from "./portfolioHoldSelectableFields";
import { PortfolioNoteSelectableFields } from "./portfolioNoteSelectableFields";
import { PortfolioTrackingSelectableFields } from "./portfolioTrackingSelectableFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface PortfolioSelectableFields {
    includeAllPortfolioFieldsValue: boolean;
    includeAllPortfolioFieldsValueSpecified: boolean;
    includeAllPortfolioFields: boolean | null;
    portfolioFields: PortfolioFields;
    portfolioHoldSelectableFields: PortfolioHoldSelectableFields;
    portfolioNoteSelectableFields: PortfolioNoteSelectableFields;
    portfolioTrackingSelectableFields: PortfolioTrackingSelectableFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}