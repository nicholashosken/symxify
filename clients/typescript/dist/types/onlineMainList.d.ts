import { OnlineMain } from "./onlineMain";
export interface OnlineMainList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    onlineMain: OnlineMain[];
    onlineMainSpecified: boolean;
}
