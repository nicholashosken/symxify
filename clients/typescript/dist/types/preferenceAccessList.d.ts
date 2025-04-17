import { PreferenceAccess } from "./preferenceAccess";
export interface PreferenceAccessList {
    hasReachedMaximumListSize: boolean | null;
    preferenceAccess: PreferenceAccess[];
}
