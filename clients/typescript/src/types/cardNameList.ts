import { CardName } from "./cardName";

export interface CardNameList {
    hasReachedMaximumListSize: boolean | null;
    cardName: CardName[];
}