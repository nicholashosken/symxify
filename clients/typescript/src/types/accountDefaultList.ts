import { AccountDefault } from "./accountDefault";

export interface AccountDefaultList {
    hasReachedMaximumListSize: boolean | null;
    accountDefault: AccountDefault[];
}