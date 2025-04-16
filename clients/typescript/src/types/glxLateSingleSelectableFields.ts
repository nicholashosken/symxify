import { GlxLateFields } from "./glxLateFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface GlxLateSingleSelectableFields {
    includeAllGlxLateFieldsValue: boolean;
    includeAllGlxLateFieldsValueSpecified: boolean;
    includeAllGlxLateFields: boolean | null;
    glxLateFields: GlxLateFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}