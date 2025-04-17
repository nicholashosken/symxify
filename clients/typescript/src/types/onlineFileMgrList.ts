import { OnlineFileMgr } from "./onlineFileMgr";

export interface OnlineFileMgrList {
    hasReachedMaximumListSize: boolean | null;
    onlineFileMgr: OnlineFileMgr[];
}