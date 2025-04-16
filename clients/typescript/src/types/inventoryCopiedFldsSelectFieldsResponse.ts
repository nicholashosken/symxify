import { InventoryCopiedFlds } from "./inventoryCopiedFlds";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface InventoryCopiedFldsSelectFieldsResponse {
    inventoryCopiedFlds: InventoryCopiedFlds;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}