import { PreferenceAccess } from "./preferenceAccess";
export interface PreferenceAccessList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    preferenceAccess: PreferenceAccess[];
    preferenceAccessSpecified: boolean;
}
