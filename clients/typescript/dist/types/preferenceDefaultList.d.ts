import { PreferenceDefault } from "./preferenceDefault";
export interface PreferenceDefaultList {
    hasReachedMaximumListSize: boolean | null;
    preferenceDefault: PreferenceDefault[];
}
