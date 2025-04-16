import { CredRepItem } from "./credRepItem";
export interface CredRepItemList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    credRepItem: CredRepItem[];
    credRepItemSpecified: boolean;
}
