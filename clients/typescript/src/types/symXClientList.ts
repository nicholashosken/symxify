import { SymXClient } from "./symXClient";

export interface SymXClientList {
    hasReachedMaximumListSize: boolean | null;
    symXClient: SymXClient[];
}