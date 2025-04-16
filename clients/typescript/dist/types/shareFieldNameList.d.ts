import { ShareFieldName } from "./shareFieldName";
export interface ShareFieldNameList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    shareFieldName: ShareFieldName[];
    shareFieldNameSpecified: boolean;
}
