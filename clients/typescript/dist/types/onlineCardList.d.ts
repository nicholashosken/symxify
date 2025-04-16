import { OnlineCard } from "./onlineCard";
export interface OnlineCardList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    onlineCard: OnlineCard[];
    onlineCardSpecified: boolean;
}
