import { InventoryGeneralFields } from "./inventoryGeneralFields";
import { VersionType } from "./versionType";
export interface InventoryGeneralSingleSelectableFields {
    includeAllInventoryGeneralFields: boolean | null;
    inventoryGeneralFields: InventoryGeneralFields;
    version1: VersionType;
}
