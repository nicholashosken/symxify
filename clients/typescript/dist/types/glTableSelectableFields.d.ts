import { GlTableFields } from "./glTableFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface GlTableSelectableFields {
    includeAllGlTableFieldsValue: boolean;
    includeAllGlTableFieldsValueSpecified: boolean;
    includeAllGlTableFields: boolean | null;
    glTableFields: GlTableFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
