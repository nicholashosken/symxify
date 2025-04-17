import { CollateralDocument } from "./collateralDocument";
import { VersionType } from "./versionType";

export interface CollateralDocumentSearchPagedSelectFieldsResponse {
    collateralDocument: CollateralDocument[];
    token: string;
    version1: VersionType;
    messageId: string;
}