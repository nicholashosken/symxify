import { CollateralTypeFields } from "./collateralTypeFields";
import { VersionType } from "./versionType";
export interface CollateralTypeSingleSelectableFields {
    includeAllCollateralTypeFields: boolean | null;
    collateralTypeFields: CollateralTypeFields;
    version1: VersionType;
}
