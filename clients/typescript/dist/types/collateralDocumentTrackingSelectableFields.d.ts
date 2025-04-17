import { CollateralDocumentTrackingFields } from "./collateralDocumentTrackingFields";
import { VersionType } from "./versionType";
export interface CollateralDocumentTrackingSelectableFields {
    includeAllCollateralDocumentTrackingFields: boolean | null;
    collateralDocumentTrackingFields: CollateralDocumentTrackingFields;
    version1: VersionType;
}
