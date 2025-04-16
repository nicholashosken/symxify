import { OnlineSba } from "./onlineSba";
export interface OnlineSbaList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    onlineSba: OnlineSba[];
    onlineSbaSpecified: boolean;
}
