import { DealerNote } from "./dealerNote";
export interface DealerNoteList {
    hasReachedMaximumListSize: boolean | null;
    dealerNote: DealerNote[];
}
