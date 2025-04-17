import { CollateralDocumentFields } from "./collateralDocumentFields";
import { VersionType } from "./versionType";
export interface CollateralDocumentSingleSelectableFields {
    includeAllCollateralDocumentFields: boolean | null;
    collateralDocumentFields: CollateralDocumentFields;
    version1: VersionType;
}
