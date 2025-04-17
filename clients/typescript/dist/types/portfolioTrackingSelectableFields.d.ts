import { PortfolioTrackingFields } from "./portfolioTrackingFields";
import { VersionType } from "./versionType";
export interface PortfolioTrackingSelectableFields {
    includeAllPortfolioTrackingFields: boolean | null;
    portfolioTrackingFields: PortfolioTrackingFields;
    version1: VersionType;
}
