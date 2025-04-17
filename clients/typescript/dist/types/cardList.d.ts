import { Card } from "./card";
export interface CardList {
    hasReachedMaximumListSize: boolean | null;
    card: Card[];
}
