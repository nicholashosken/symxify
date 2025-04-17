import { CollateralType } from "./collateralType";
import { VersionType } from "./versionType";

export interface CollateralTypeSearchPagedSelectFieldsResponse {
    collateralType: CollateralType[];
    token: string;
    version1: VersionType;
    messageId: string;
}