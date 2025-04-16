import { InventoryGeneral } from "./inventoryGeneral";

export interface InventoryGeneralList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    inventoryGeneral: InventoryGeneral[];
    inventoryGeneralSpecified: boolean;
}