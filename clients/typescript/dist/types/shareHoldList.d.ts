import { ShareHold } from "./shareHold";
export interface ShareHoldList {
    hasReachedMaximumListSize: boolean | null;
    shareHold: ShareHold[];
}
