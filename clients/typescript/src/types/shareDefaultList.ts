import { ShareDefault } from "./shareDefault";

export interface ShareDefaultList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    shareDefault: ShareDefault[];
    shareDefaultSpecified: boolean;
}