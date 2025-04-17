import { PreferenceAccessFilter } from "./preferenceAccessFilter";
import { VersionType } from "./versionType";

export interface PreferenceChildrenFilter {
    preferenceAccessFilter: PreferenceAccessFilter;
    version1: VersionType;
}