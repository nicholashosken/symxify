import { InventoryCopiedFlds } from "./inventoryCopiedFlds";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface InventoryCopiedFldsPagedListSelectFieldsResponse {
    inventoryCopiedFlds: InventoryCopiedFlds[];
    inventoryCopiedFldsSpecified: boolean;
    token: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
