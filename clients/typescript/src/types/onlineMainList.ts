import { OnlineMain } from "./onlineMain";

export interface OnlineMainList {
    hasReachedMaximumListSize: boolean | null;
    onlineMain: OnlineMain[];
}