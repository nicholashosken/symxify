import { OnlineNet } from "./onlineNet";

export interface OnlineNetList {
    hasReachedMaximumListSize: boolean | null;
    onlineNet: OnlineNet[];
}