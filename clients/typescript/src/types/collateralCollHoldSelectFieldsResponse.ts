import { CollateralCollHold } from "./collateralCollHold";
import { VersionType } from "./versionType";

export interface CollateralCollHoldSelectFieldsResponse {
    collateralCollHold: CollateralCollHold;
    version1: VersionType;
    messageId: string;
}