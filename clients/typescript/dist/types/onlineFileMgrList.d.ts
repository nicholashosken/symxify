import { OnlineFileMgr } from "./onlineFileMgr";
export interface OnlineFileMgrList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    onlineFileMgr: OnlineFileMgr[];
    onlineFileMgrSpecified: boolean;
}
