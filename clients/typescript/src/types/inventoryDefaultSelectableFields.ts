import { InventoryDefaultFields } from "./inventoryDefaultFields";
import { VersionType } from "./versionType";

export interface InventoryDefaultSelectableFields {
    includeAllInventoryDefaultFields: boolean | null;
    inventoryDefaultFields: InventoryDefaultFields;
    version1: VersionType;
}