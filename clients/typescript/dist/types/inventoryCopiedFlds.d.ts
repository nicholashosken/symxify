import { InventoryCopiedFldsCopiedField } from "./inventoryCopiedFldsCopiedField";
import { InventoryCopiedFldsSubField } from "./inventoryCopiedFldsSubField";
import { VersionType } from "./versionType";
export interface InventoryCopiedFlds {
    copiedField: InventoryCopiedFldsCopiedField[];
    inventoryScreenType: number | null;
    subField: InventoryCopiedFldsSubField[];
    version1: VersionType;
}
