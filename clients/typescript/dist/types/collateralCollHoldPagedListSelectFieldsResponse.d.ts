import { CollateralCollHold } from "./collateralCollHold";
import { VersionType } from "./versionType";
export interface CollateralCollHoldPagedListSelectFieldsResponse {
    collateralCollHold: CollateralCollHold[];
    token: string;
    version1: VersionType;
    messageId: string;
}
