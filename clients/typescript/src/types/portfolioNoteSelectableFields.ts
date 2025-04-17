import { PortfolioNoteFields } from "./portfolioNoteFields";
import { VersionType } from "./versionType";

export interface PortfolioNoteSelectableFields {
    includeAllPortfolioNoteFields: boolean | null;
    portfolioNoteFields: PortfolioNoteFields;
    version1: VersionType;
}