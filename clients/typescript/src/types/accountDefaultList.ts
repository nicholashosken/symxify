import { AccountDefault } from "./accountDefault";

export interface AccountDefaultList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    accountDefault: AccountDefault[];
    accountDefaultSpecified: boolean;
}