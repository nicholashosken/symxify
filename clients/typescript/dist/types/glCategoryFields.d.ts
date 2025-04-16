import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface GlCategoryFields {
    glCategoryValue: boolean;
    glCategoryValueSpecified: boolean;
    glCategory: boolean | null;
    glCategoryDescriptionValue: boolean;
    glCategoryDescriptionValueSpecified: boolean;
    glCategoryDescription: boolean | null;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
