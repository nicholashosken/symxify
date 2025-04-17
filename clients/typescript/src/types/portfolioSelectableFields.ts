import { PortfolioFields } from "./portfolioFields";
import { PortfolioHoldSelectableFields } from "./portfolioHoldSelectableFields";
import { PortfolioNoteSelectableFields } from "./portfolioNoteSelectableFields";
import { PortfolioTrackingSelectableFields } from "./portfolioTrackingSelectableFields";
import { VersionType } from "./versionType";

export interface PortfolioSelectableFields {
    includeAllPortfolioFields: boolean | null;
    portfolioFields: PortfolioFields;
    portfolioHoldSelectableFields: PortfolioHoldSelectableFields;
    portfolioNoteSelectableFields: PortfolioNoteSelectableFields;
    portfolioTrackingSelectableFields: PortfolioTrackingSelectableFields;
    version1: VersionType;
}