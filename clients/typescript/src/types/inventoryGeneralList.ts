import { InventoryGeneral } from "./inventoryGeneral";

export interface InventoryGeneralList {
    hasReachedMaximumListSize: boolean | null;
    inventoryGeneral: InventoryGeneral[];
}