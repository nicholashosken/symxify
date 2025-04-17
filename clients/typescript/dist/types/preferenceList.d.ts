import { Preference } from "./preference";
export interface PreferenceList {
    hasReachedMaximumListSize: boolean | null;
    preference: Preference[];
}
