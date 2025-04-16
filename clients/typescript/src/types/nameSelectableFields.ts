import { NameFields } from "./nameFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface NameSelectableFields {
    includeAllNameFieldsValue: boolean;
    includeAllNameFieldsValueSpecified: boolean;
    includeAllNameFields: boolean | null;
    nameFields: NameFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}