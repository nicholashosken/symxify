import { OnlineOutlet } from "./onlineOutlet";
export interface OnlineOutletList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    onlineOutlet: OnlineOutlet[];
    onlineOutletSpecified: boolean;
}
