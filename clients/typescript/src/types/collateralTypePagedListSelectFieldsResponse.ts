import { CollateralType } from "./collateralType";
import { VersionType } from "./versionType";

export interface CollateralTypePagedListSelectFieldsResponse {
    collateralType: CollateralType[];
    token: string;
    version1: VersionType;
    messageId: string;
}