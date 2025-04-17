import { CollateralFields } from "./collateralFields";
import { VersionType } from "./versionType";

export interface CollateralSingleSelectableFields {
    includeAllCollateralFields: boolean | null;
    collateralFields: CollateralFields;
    version1: VersionType;
}