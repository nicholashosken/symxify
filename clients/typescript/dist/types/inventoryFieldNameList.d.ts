import { InventoryFieldName } from "./inventoryFieldName";
export interface InventoryFieldNameList {
    hasReachedMaximumListSize: boolean | null;
    inventoryFieldName: InventoryFieldName[];
}
