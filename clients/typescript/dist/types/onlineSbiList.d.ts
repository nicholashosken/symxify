import { OnlineSbi } from "./onlineSbi";
export interface OnlineSbiList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    onlineSbi: OnlineSbi[];
    onlineSbiSpecified: boolean;
}
