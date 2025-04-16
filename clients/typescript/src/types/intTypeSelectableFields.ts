import { IntTypeFields } from "./intTypeFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface IntTypeSelectableFields {
    includeAllIntTypeFieldsValue: boolean;
    includeAllIntTypeFieldsValueSpecified: boolean;
    includeAllIntTypeFields: boolean | null;
    intTypeFields: IntTypeFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}