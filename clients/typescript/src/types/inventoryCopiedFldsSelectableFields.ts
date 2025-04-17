import { InventoryCopiedFldsFields } from "./inventoryCopiedFldsFields";
import { VersionType } from "./versionType";

export interface InventoryCopiedFldsSelectableFields {
    includeAllInventoryCopiedFldsFields: boolean | null;
    inventoryCopiedFldsFields: InventoryCopiedFldsFields;
    version1: VersionType;
}