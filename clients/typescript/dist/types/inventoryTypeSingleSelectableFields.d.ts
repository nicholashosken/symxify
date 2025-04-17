import { InventoryTypeFields } from "./inventoryTypeFields";
import { VersionType } from "./versionType";
export interface InventoryTypeSingleSelectableFields {
    includeAllInventoryTypeFields: boolean | null;
    inventoryTypeFields: InventoryTypeFields;
    version1: VersionType;
}
