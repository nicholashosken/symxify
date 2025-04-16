import { InventoryFieldName } from "./inventoryFieldName";

export interface InventoryFieldNameList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    inventoryFieldName: InventoryFieldName[];
    inventoryFieldNameSpecified: boolean;
}