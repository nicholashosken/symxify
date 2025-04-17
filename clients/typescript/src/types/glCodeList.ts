import { GlCode } from "./glCode";

export interface GlCodeList {
    hasReachedMaximumListSize: boolean | null;
    glCode: GlCode[];
}