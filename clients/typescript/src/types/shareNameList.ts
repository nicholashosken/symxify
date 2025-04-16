import { ShareName } from "./shareName";

export interface ShareNameList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    shareName: ShareName[];
    shareNameSpecified: boolean;
}