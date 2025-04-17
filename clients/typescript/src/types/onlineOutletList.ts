import { OnlineOutlet } from "./onlineOutlet";

export interface OnlineOutletList {
    hasReachedMaximumListSize: boolean | null;
    onlineOutlet: OnlineOutlet[];
}