import { InventoryTypeFields } from "./inventoryTypeFields";
import { VersionType } from "./versionType";
export interface InventoryTypeSelectableFields {
    includeAllInventoryTypeFields: boolean | null;
    inventoryTypeFields: InventoryTypeFields;
    version1: VersionType;
}
