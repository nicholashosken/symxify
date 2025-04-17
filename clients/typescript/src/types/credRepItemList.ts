import { CredRepItem } from "./credRepItem";

export interface CredRepItemList {
    hasReachedMaximumListSize: boolean | null;
    credRepItem: CredRepItem[];
}