import { InventoryDefaultFields } from "./inventoryDefaultFields";
import { VersionType } from "./versionType";
export interface InventoryDefaultSingleSelectableFields {
    includeAllInventoryDefaultFields: boolean | null;
    inventoryDefaultFields: InventoryDefaultFields;
    version1: VersionType;
}
