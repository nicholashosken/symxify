import { Share } from "./share";

export interface ShareList {
    hasReachedMaximumListSize: boolean | null;
    share: Share[];
}