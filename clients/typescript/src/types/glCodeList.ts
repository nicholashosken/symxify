import { GlCode } from "./glCode";

export interface GlCodeList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    glCode: GlCode[];
    glCodeSpecified: boolean;
}