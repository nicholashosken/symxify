import { ShareName } from "./shareName";
export interface ShareNameList {
    hasReachedMaximumListSize: boolean | null;
    shareName: ShareName[];
}
