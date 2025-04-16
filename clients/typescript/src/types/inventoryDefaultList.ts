import { InventoryDefault } from "./inventoryDefault";

export interface InventoryDefaultList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    inventoryDefault: InventoryDefault[];
    inventoryDefaultSpecified: boolean;
}