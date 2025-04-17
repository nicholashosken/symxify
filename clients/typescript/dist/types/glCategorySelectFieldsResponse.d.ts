import { GlCategory } from "./glCategory";
import { VersionType } from "./versionType";
export interface GlCategorySelectFieldsResponse {
    glCategory: GlCategory;
    version1: VersionType;
    messageId: string;
}
