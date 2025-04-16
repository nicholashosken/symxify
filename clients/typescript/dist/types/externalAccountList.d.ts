import { ExternalAccount } from "./externalAccount";
export interface ExternalAccountList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    externalAccount: ExternalAccount[];
    externalAccountSpecified: boolean;
}
