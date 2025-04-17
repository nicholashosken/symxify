import { CpWorkCardNote } from "./cpWorkCardNote";

export interface CpWorkCardNoteList {
    hasReachedMaximumListSize: boolean | null;
    cpWorkCardNote: CpWorkCardNote[];
}