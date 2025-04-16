import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface InventoryFieldName {
    fieldValue: number;
    fieldValueSpecified: boolean;
    field: number | null;
    fieldName: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
