import { OnlineBlock } from "./onlineBlock";
export interface OnlineBlockList {
    hasReachedMaximumListSize: boolean | null;
    onlineBlock: OnlineBlock[];
}
