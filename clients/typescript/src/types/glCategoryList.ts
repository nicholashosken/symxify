import { GlCategory } from "./glCategory";

export interface GlCategoryList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    glCategory: GlCategory[];
    glCategorySpecified: boolean;
}