import { ShareNote } from "./shareNote";
export interface ShareNoteList {
    hasReachedMaximumListSize: boolean | null;
    shareNote: ShareNote[];
}
