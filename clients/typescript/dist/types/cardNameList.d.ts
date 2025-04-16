import { CardName } from "./cardName";
export interface CardNameList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    cardName: CardName[];
    cardNameSpecified: boolean;
}
