import { Collateral } from "./collateral";
import { VersionType } from "./versionType";
export interface CollateralSelectFieldsFilterChildrenResponse {
    collateral: Collateral;
    version1: VersionType;
    messageId: string;
}
