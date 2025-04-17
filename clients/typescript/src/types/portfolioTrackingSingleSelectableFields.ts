import { PortfolioTrackingFields } from "./portfolioTrackingFields";
import { VersionType } from "./versionType";

export interface PortfolioTrackingSingleSelectableFields {
    includeAllPortfolioTrackingFields: boolean | null;
    portfolioTrackingFields: PortfolioTrackingFields;
    version1: VersionType;
}