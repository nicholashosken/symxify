import { InventoryCopiedFldsCopiedField_2 } from "./inventoryCopiedFldsCopiedField_2";
import { InventoryCopiedFldsSubField_2 } from "./inventoryCopiedFldsSubField_2";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface InventoryCopiedFlds_2 {
    copiedField: InventoryCopiedFldsCopiedField_2[];
    copiedFieldSpecified: boolean;
    inventoryScreenTypeValue: number;
    inventoryScreenTypeValueSpecified: boolean;
    inventoryScreenType: number | null;
    subField: InventoryCopiedFldsSubField_2[];
    subFieldSpecified: boolean;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}