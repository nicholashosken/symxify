import { InventoryDefault } from "./inventoryDefault";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface InventoryDefaultPagedListSelectFieldsResponse {
    inventoryDefault: InventoryDefault[];
    inventoryDefaultSpecified: boolean;
    token: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
