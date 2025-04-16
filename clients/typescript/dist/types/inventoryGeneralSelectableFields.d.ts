import { InventoryGeneralFields } from "./inventoryGeneralFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface InventoryGeneralSelectableFields {
    includeAllInventoryGeneralFieldsValue: boolean;
    includeAllInventoryGeneralFieldsValueSpecified: boolean;
    includeAllInventoryGeneralFields: boolean | null;
    inventoryGeneralFields: InventoryGeneralFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
