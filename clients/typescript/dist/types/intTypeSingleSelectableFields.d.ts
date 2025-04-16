import { IntTypeFields } from "./intTypeFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface IntTypeSingleSelectableFields {
    includeAllIntTypeFieldsValue: boolean;
    includeAllIntTypeFieldsValueSpecified: boolean;
    includeAllIntTypeFields: boolean | null;
    intTypeFields: IntTypeFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
