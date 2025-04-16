import { InventoryFieldName } from "./inventoryFieldName";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface InventoryFieldNameSelectFieldsResponse {
    inventoryFieldName: InventoryFieldName;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}