import { CardAccess } from "./cardAccess";
export interface CardAccessList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    cardAccess: CardAccess[];
    cardAccessSpecified: boolean;
}
