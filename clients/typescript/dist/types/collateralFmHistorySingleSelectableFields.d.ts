import { CollateralFmHistoryFields } from "./collateralFmHistoryFields";
import { VersionType } from "./versionType";
export interface CollateralFmHistorySingleSelectableFields {
    includeAllCollateralFmHistoryFields: boolean | null;
    collateralFmHistoryFields: CollateralFmHistoryFields;
    version1: VersionType;
}
