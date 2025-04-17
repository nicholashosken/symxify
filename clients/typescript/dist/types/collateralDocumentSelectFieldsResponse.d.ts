import { CollateralDocument } from "./collateralDocument";
import { VersionType } from "./versionType";
export interface CollateralDocumentSelectFieldsResponse {
    collateralDocument: CollateralDocument;
    version1: VersionType;
    messageId: string;
}
