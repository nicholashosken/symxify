import { GlCodeFields } from "./glCodeFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface GlCodeSelectableFields {
    includeAllGlCodeFieldsValue: boolean;
    includeAllGlCodeFieldsValueSpecified: boolean;
    includeAllGlCodeFields: boolean | null;
    glCodeFields: GlCodeFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}