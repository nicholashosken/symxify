import { InventoryType } from "./inventoryType";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface InventoryTypeSelectFieldsResponse {
    inventoryType: InventoryType;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}