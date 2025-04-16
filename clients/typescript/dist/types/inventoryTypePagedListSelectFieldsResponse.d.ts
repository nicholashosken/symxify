import { InventoryType } from "./inventoryType";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface InventoryTypePagedListSelectFieldsResponse {
    inventoryType: InventoryType[];
    inventoryTypeSpecified: boolean;
    token: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
