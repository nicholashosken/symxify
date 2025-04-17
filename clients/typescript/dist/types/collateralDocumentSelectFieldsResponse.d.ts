import { CollateralDocument } from "./collateralDocument";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface CollateralDocumentSelectFieldsResponse {
    collateralDocument: CollateralDocument;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
