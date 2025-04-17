import { OnlineFile } from "./onlineFile";

export interface OnlineFileList {
    hasReachedMaximumListSize: boolean | null;
    onlineFile: OnlineFile[];
}