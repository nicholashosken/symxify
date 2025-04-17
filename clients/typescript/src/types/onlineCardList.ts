import { OnlineCard } from "./onlineCard";

export interface OnlineCardList {
    hasReachedMaximumListSize: boolean | null;
    onlineCard: OnlineCard[];
}