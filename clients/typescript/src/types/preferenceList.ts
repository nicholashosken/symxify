import { Preference } from "./preference";

export interface PreferenceList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    preference: Preference[];
    preferenceSpecified: boolean;
}