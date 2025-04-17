import { PortfolioFields } from "./portfolioFields";
import { VersionType } from "./versionType";
export interface PortfolioSingleSelectableFields {
    includeAllPortfolioFields: boolean | null;
    portfolioFields: PortfolioFields;
    version1: VersionType;
}
