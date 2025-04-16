import { OnlineNet } from "./onlineNet";
export interface OnlineNetList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    onlineNet: OnlineNet[];
    onlineNetSpecified: boolean;
}
