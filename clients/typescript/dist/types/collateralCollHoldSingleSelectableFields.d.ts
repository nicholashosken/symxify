import { CollateralCollHoldFields } from "./collateralCollHoldFields";
import { VersionType } from "./versionType";
export interface CollateralCollHoldSingleSelectableFields {
    includeAllCollateralCollHoldFields: boolean | null;
    collateralCollHoldFields: CollateralCollHoldFields;
    version1: VersionType;
}
