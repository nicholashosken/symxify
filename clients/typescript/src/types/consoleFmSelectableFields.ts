import { ConsoleFmFields } from "./consoleFmFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface ConsoleFmSelectableFields {
    includeAllConsoleFmFieldsValue: boolean;
    includeAllConsoleFmFieldsValueSpecified: boolean;
    includeAllConsoleFmFields: boolean | null;
    consoleFmFields: ConsoleFmFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}