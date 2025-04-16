import { Note } from "./note";
export interface NoteList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    note: Note[];
    noteSpecified: boolean;
}
