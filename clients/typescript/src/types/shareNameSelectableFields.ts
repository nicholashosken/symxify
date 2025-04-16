import { ShareNameFields } from "./shareNameFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface ShareNameSelectableFields {
    includeAllShareNameFieldsValue: boolean;
    includeAllShareNameFieldsValueSpecified: boolean;
    includeAllShareNameFields: boolean | null;
    shareNameFields: ShareNameFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}