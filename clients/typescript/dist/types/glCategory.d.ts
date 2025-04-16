import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface GlCategory {
    glCategoryPropertyValue: number;
    glCategoryPropertyValueSpecified: boolean;
    glCategoryProperty: number | null;
    glCategoryDescription: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
