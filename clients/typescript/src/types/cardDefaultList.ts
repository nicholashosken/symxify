import { CardDefault } from "./cardDefault";

export interface CardDefaultList {
    hasReachedMaximumListSize: boolean | null;
    cardDefault: CardDefault[];
}