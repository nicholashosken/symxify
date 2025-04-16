import { InventoryDefaultFields_2 } from "./inventoryDefaultFields_2";

export interface InventoryDefaultUpdateRequest {
    inventoryDefaultInventoryTypeValue: number;
    inventoryDefaultInventoryTypeValueSpecified: boolean;
    inventoryDefaultInventoryType: number | null;
    inventoryDefaultFields: InventoryDefaultFields_2;
}