import { CardAccess } from "./cardAccess";
export interface CardAccessList {
    hasReachedMaximumListSize: boolean | null;
    cardAccess: CardAccess[];
}
