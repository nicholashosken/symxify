import { GlHistoryFields } from "./glHistoryFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface GlHistorySelectableFields {
    includeAllGlHistoryFieldsValue: boolean;
    includeAllGlHistoryFieldsValueSpecified: boolean;
    includeAllGlHistoryFields: boolean | null;
    glHistoryFields: GlHistoryFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}