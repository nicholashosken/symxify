import { CardWiz } from "./cardWiz";
export interface CardWizList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    cardWiz: CardWiz[];
    cardWizSpecified: boolean;
}
