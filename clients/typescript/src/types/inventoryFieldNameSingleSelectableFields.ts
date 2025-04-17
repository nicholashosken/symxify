import { InventoryFieldNameFields } from "./inventoryFieldNameFields";
import { VersionType } from "./versionType";

export interface InventoryFieldNameSingleSelectableFields {
    includeAllInventoryFieldNameFields: boolean | null;
    inventoryFieldNameFields: InventoryFieldNameFields;
    version1: VersionType;
}