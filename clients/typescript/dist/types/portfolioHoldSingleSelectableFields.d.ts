import { PortfolioHoldFields } from "./portfolioHoldFields";
import { VersionType } from "./versionType";
export interface PortfolioHoldSingleSelectableFields {
    includeAllPortfolioHoldFields: boolean | null;
    portfolioHoldFields: PortfolioHoldFields;
    version1: VersionType;
}
