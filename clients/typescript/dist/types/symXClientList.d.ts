import { SymXClient } from "./symXClient";
export interface SymXClientList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    symXClient: SymXClient[];
    symXClientSpecified: boolean;
}
