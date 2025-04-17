import { InventoryDefault } from "./inventoryDefault";
export interface InventoryDefaultList {
    hasReachedMaximumListSize: boolean | null;
    inventoryDefault: InventoryDefault[];
}
