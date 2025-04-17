import { CtrNote } from "./ctrNote";
export interface CtrNoteList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    ctrNote: CtrNote[];
    ctrNoteSpecified: boolean;
}
