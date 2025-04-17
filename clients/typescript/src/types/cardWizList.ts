import { CardWiz } from "./cardWiz";

export interface CardWizList {
    hasReachedMaximumListSize: boolean | null;
    cardWiz: CardWiz[];
}