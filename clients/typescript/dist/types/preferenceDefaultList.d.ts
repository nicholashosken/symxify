import { PreferenceDefault } from "./preferenceDefault";
export interface PreferenceDefaultList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    preferenceDefault: PreferenceDefault[];
    preferenceDefaultSpecified: boolean;
}
