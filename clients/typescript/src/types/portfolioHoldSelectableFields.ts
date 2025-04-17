import { PortfolioHoldFields } from "./portfolioHoldFields";
import { VersionType } from "./versionType";

export interface PortfolioHoldSelectableFields {
    includeAllPortfolioHoldFields: boolean | null;
    portfolioHoldFields: PortfolioHoldFields;
    version1: VersionType;
}