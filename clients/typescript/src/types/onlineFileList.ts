import { OnlineFile } from "./onlineFile";

export interface OnlineFileList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    onlineFile: OnlineFile[];
    onlineFileSpecified: boolean;
}