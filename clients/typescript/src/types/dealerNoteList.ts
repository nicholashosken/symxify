import { DealerNote } from "./dealerNote";

export interface DealerNoteList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    dealerNote: DealerNote[];
    dealerNoteSpecified: boolean;
}