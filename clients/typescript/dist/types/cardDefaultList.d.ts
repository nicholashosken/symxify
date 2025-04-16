import { CardDefault } from "./cardDefault";
export interface CardDefaultList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    cardDefault: CardDefault[];
    cardDefaultSpecified: boolean;
}
