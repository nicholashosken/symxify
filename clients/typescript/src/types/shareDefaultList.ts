import { ShareDefault } from "./shareDefault";

export interface ShareDefaultList {
    hasReachedMaximumListSize: boolean | null;
    shareDefault: ShareDefault[];
}