import { IdentIdTypeDescFields } from "./identIdTypeDescFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface IdentIdTypeDescSingleSelectableFields {
    includeAllIdentIdTypeDescFieldsValue: boolean;
    includeAllIdentIdTypeDescFieldsValueSpecified: boolean;
    includeAllIdentIdTypeDescFields: boolean | null;
    identIdTypeDescFields: IdentIdTypeDescFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}