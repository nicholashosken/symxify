import { NameFieldNameFields } from "./nameFieldNameFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface NameFieldNameSelectableFields {
    includeAllNameFieldNameFieldsValue: boolean;
    includeAllNameFieldNameFieldsValueSpecified: boolean;
    includeAllNameFieldNameFields: boolean | null;
    nameFieldNameFields: NameFieldNameFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
