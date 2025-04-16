import { CpWorkCardNote } from "./cpWorkCardNote";

export interface CpWorkCardNoteList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    cpWorkCardNote: CpWorkCardNote[];
    cpWorkCardNoteSpecified: boolean;
}