import { ShareNote } from "./shareNote";

export interface ShareNoteList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    shareNote: ShareNote[];
    shareNoteSpecified: boolean;
}