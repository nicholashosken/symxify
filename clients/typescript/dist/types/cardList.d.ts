import { Card } from "./card";
export interface CardList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    card: Card[];
    cardSpecified: boolean;
}
