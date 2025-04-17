import { CardNote } from "./cardNote";
export interface CardNoteList {
    hasReachedMaximumListSize: boolean | null;
    cardNote: CardNote[];
}
