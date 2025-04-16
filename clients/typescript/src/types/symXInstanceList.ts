import { SymXInstance } from "./symXInstance";

export interface SymXInstanceList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    symXInstance: SymXInstance[];
    symXInstanceSpecified: boolean;
}