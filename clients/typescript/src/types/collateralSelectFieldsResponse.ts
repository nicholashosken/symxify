import { Collateral } from "./collateral";
import { VersionType } from "./versionType";

export interface CollateralSelectFieldsResponse {
    collateral: Collateral;
    version1: VersionType;
    messageId: string;
}