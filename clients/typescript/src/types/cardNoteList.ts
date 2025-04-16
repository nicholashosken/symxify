import { CardNote } from "./cardNote";

export interface CardNoteList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    cardNote: CardNote[];
    cardNoteSpecified: boolean;
}