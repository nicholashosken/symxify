import { GlCategoryFields } from "./glCategoryFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface GlCategorySelectableFields {
    includeAllGlCategoryFieldsValue: boolean;
    includeAllGlCategoryFieldsValueSpecified: boolean;
    includeAllGlCategoryFields: boolean | null;
    glCategoryFields: GlCategoryFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
