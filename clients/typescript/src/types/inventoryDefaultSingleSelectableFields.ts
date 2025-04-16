import { InventoryDefaultFields } from "./inventoryDefaultFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface InventoryDefaultSingleSelectableFields {
    includeAllInventoryDefaultFieldsValue: boolean;
    includeAllInventoryDefaultFieldsValueSpecified: boolean;
    includeAllInventoryDefaultFields: boolean | null;
    inventoryDefaultFields: InventoryDefaultFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}