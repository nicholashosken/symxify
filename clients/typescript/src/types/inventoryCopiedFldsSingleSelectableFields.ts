import { InventoryCopiedFldsFields } from "./inventoryCopiedFldsFields";
import { VersionType } from "./versionType";

export interface InventoryCopiedFldsSingleSelectableFields {
    includeAllInventoryCopiedFldsFields: boolean | null;
    inventoryCopiedFldsFields: InventoryCopiedFldsFields;
    version1: VersionType;
}