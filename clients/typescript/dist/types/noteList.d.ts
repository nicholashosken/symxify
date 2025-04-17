import { Note } from "./note";
export interface NoteList {
    hasReachedMaximumListSize: boolean | null;
    note: Note[];
}
