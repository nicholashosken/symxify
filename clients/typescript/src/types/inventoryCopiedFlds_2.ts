import { InventoryCopiedFldsCopiedField_2 } from "./inventoryCopiedFldsCopiedField_2";
import { InventoryCopiedFldsSubField_2 } from "./inventoryCopiedFldsSubField_2";
import { VersionType } from "./versionType";

export interface InventoryCopiedFlds_2 {
    copiedField: InventoryCopiedFldsCopiedField_2[];
    inventoryScreenType: number | null;
    subField: InventoryCopiedFldsSubField_2[];
    version1: VersionType;
}