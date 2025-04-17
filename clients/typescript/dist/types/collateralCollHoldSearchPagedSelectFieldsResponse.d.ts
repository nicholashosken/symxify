import { CollateralCollHold } from "./collateralCollHold";
import { VersionType } from "./versionType";
export interface CollateralCollHoldSearchPagedSelectFieldsResponse {
    collateralCollHold: CollateralCollHold[];
    token: string;
    version1: VersionType;
    messageId: string;
}
