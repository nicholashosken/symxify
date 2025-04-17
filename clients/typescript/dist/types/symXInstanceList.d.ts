import { SymXInstance } from "./symXInstance";
export interface SymXInstanceList {
    hasReachedMaximumListSize: boolean | null;
    symXInstance: SymXInstance[];
}
