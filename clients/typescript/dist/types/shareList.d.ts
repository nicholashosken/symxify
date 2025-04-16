import { Share } from "./share";
export interface ShareList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    share: Share[];
    shareSpecified: boolean;
}
