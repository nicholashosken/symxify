import { ExternalAccount } from "./externalAccount";
export interface ExternalAccountList {
    hasReachedMaximumListSize: boolean | null;
    externalAccount: ExternalAccount[];
}
