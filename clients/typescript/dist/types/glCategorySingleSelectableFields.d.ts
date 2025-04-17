import { GlCategoryFields } from "./glCategoryFields";
import { VersionType } from "./versionType";
export interface GlCategorySingleSelectableFields {
    includeAllGlCategoryFields: boolean | null;
    glCategoryFields: GlCategoryFields;
    version1: VersionType;
}
