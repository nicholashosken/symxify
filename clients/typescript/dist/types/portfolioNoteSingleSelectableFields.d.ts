import { PortfolioNoteFields } from "./portfolioNoteFields";
import { VersionType } from "./versionType";
export interface PortfolioNoteSingleSelectableFields {
    includeAllPortfolioNoteFields: boolean | null;
    portfolioNoteFields: PortfolioNoteFields;
    version1: VersionType;
}
