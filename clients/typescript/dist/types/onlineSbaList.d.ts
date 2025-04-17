import { OnlineSba } from "./onlineSba";
export interface OnlineSbaList {
    hasReachedMaximumListSize: boolean | null;
    onlineSba: OnlineSba[];
}
