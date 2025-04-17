import { OnlineSbi } from "./onlineSbi";
export interface OnlineSbiList {
    hasReachedMaximumListSize: boolean | null;
    onlineSbi: OnlineSbi[];
}
