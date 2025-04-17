import { CollateralDocument } from "./collateralDocument";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface CollateralDocumentSearchPagedSelectFieldsResponse {
    collateralDocument: CollateralDocument[];
    collateralDocumentSpecified: boolean;
    token: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}