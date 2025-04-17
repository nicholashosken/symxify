import { CtrForeign } from "./ctrForeign";

export interface CtrForeignList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    ctrForeign: CtrForeign[];
    ctrForeignSpecified: boolean;
}