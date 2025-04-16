import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface InventoryCopiedFldsFields {
    copiedField: number[];
    copiedFieldSpecified: boolean;
    inventoryScreenTypeValue: boolean;
    inventoryScreenTypeValueSpecified: boolean;
    inventoryScreenType: boolean | null;
    subField: number[];
    subFieldSpecified: boolean;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
