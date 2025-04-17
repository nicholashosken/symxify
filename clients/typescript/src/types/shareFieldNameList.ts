import { ShareFieldName } from "./shareFieldName";

export interface ShareFieldNameList {
    hasReachedMaximumListSize: boolean | null;
    shareFieldName: ShareFieldName[];
}