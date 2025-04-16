import { NameFieldName } from "./nameFieldName";

export interface NameFieldNameList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    nameFieldName: NameFieldName[];
    nameFieldNameSpecified: boolean;
}