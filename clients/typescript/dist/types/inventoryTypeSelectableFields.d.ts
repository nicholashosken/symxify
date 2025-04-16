import { InventoryTypeFields } from "./inventoryTypeFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface InventoryTypeSelectableFields {
    includeAllInventoryTypeFieldsValue: boolean;
    includeAllInventoryTypeFieldsValueSpecified: boolean;
    includeAllInventoryTypeFields: boolean | null;
    inventoryTypeFields: InventoryTypeFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
