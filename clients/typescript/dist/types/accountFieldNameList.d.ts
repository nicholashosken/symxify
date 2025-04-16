import { AccountFieldName } from "./accountFieldName";
export interface AccountFieldNameList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    accountFieldName: AccountFieldName[];
    accountFieldNameSpecified: boolean;
}
