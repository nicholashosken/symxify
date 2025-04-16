import { Name } from "./name";
export interface NameList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    name: Name[];
    nameSpecified: boolean;
}
