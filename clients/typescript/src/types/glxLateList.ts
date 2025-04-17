import { GlxLate } from "./glxLate";

export interface GlxLateList {
    hasReachedMaximumListSize: boolean | null;
    glxLate: GlxLate[];
}