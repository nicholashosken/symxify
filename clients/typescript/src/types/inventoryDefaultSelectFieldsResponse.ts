import { InventoryDefault } from "./inventoryDefault";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface InventoryDefaultSelectFieldsResponse {
    inventoryDefault: InventoryDefault;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}