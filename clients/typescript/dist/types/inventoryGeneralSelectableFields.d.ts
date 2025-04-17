import { InventoryGeneralFields } from "./inventoryGeneralFields";
import { VersionType } from "./versionType";
export interface InventoryGeneralSelectableFields {
    includeAllInventoryGeneralFields: boolean | null;
    inventoryGeneralFields: InventoryGeneralFields;
    version1: VersionType;
}
