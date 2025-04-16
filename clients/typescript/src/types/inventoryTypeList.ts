import { InventoryType } from "./inventoryType";

export interface InventoryTypeList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    inventoryType: InventoryType[];
    inventoryTypeSpecified: boolean;
}