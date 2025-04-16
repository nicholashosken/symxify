import { WarningsFields } from "./warningsFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface WarningsSelectableFields {
    includeAllWarningsFieldsValue: boolean;
    includeAllWarningsFieldsValueSpecified: boolean;
    includeAllWarningsFields: boolean | null;
    warningsFields: WarningsFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}