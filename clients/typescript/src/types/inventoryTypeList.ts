import { InventoryType } from "./inventoryType";

export interface InventoryTypeList {
    hasReachedMaximumListSize: boolean | null;
    inventoryType: InventoryType[];
}