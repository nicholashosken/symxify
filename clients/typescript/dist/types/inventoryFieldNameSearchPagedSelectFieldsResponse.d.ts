import { InventoryFieldName } from "./inventoryFieldName";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface InventoryFieldNameSearchPagedSelectFieldsResponse {
    inventoryFieldName: InventoryFieldName[];
    inventoryFieldNameSpecified: boolean;
    token: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
