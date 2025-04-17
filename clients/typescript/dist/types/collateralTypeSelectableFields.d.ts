import { CollateralTypeFields } from "./collateralTypeFields";
import { VersionType } from "./versionType";
export interface CollateralTypeSelectableFields {
    includeAllCollateralTypeFields: boolean | null;
    collateralTypeFields: CollateralTypeFields;
    version1: VersionType;
}
