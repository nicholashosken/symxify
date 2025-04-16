import { OnlineBlock } from "./onlineBlock";
export interface OnlineBlockList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    onlineBlock: OnlineBlock[];
    onlineBlockSpecified: boolean;
}
