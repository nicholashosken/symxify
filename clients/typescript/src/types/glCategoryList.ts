import { GlCategory } from "./glCategory";

export interface GlCategoryList {
    hasReachedMaximumListSize: boolean | null;
    glCategory: GlCategory[];
}