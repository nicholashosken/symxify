import { CollateralType } from "./collateralType";
import { VersionType } from "./versionType";

export interface CollateralTypeSelectFieldsResponse {
    collateralType: CollateralType;
    version1: VersionType;
    messageId: string;
}