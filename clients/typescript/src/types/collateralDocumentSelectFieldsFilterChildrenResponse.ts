import { CollateralDocument } from "./collateralDocument";
import { VersionType } from "./versionType";

export interface CollateralDocumentSelectFieldsFilterChildrenResponse {
    collateralDocument: CollateralDocument;
    version1: VersionType;
    messageId: string;
}