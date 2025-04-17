import { CollateralDocument } from "./collateralDocument";
import { VersionType } from "./versionType";
export interface CollateralDocumentPagedListSelectFieldsResponse {
    collateralDocument: CollateralDocument[];
    token: string;
    version1: VersionType;
    messageId: string;
}
