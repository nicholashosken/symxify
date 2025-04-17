import { CollateralDocumentFields } from "./collateralDocumentFields";
import { CollateralDocumentTrackingSelectableFields } from "./collateralDocumentTrackingSelectableFields";
import { VersionType } from "./versionType";
export interface CollateralDocumentSelectableFields {
    includeAllCollateralDocumentFields: boolean | null;
    collateralDocumentFields: CollateralDocumentFields;
    collateralDocumentTrackingSelectableFields: CollateralDocumentTrackingSelectableFields;
    version1: VersionType;
}
