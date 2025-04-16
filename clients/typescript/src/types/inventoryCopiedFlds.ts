import { InventoryCopiedFldsCopiedField } from "./inventoryCopiedFldsCopiedField";
import { InventoryCopiedFldsSubField } from "./inventoryCopiedFldsSubField";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface InventoryCopiedFlds {
    copiedField: InventoryCopiedFldsCopiedField[];
    copiedFieldSpecified: boolean;
    inventoryScreenTypeValue: number;
    inventoryScreenTypeValueSpecified: boolean;
    inventoryScreenType: number | null;
    subField: InventoryCopiedFldsSubField[];
    subFieldSpecified: boolean;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}