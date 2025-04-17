import { CollateralTrackingFields } from "./collateralTrackingFields";
import { VersionType } from "./versionType";
export interface CollateralTrackingSingleSelectableFields {
    includeAllCollateralTrackingFields: boolean | null;
    collateralTrackingFields: CollateralTrackingFields;
    version1: VersionType;
}
