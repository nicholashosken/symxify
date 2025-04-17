import { CtrNote } from "./ctrNote";
export interface CtrNoteList {
    hasReachedMaximumListSize: boolean | null;
    ctrNote: CtrNote[];
}
