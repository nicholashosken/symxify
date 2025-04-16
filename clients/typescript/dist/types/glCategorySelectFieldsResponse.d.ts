import { GlCategory } from "./glCategory";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface GlCategorySelectFieldsResponse {
    glCategory: GlCategory;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
