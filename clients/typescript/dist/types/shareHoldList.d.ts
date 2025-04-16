import { ShareHold } from "./shareHold";
export interface ShareHoldList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    shareHold: ShareHold[];
    shareHoldSpecified: boolean;
}
