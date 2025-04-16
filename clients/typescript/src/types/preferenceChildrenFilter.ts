import { PreferenceAccessFilter } from "./preferenceAccessFilter";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface PreferenceChildrenFilter {
    preferenceAccessFilter: PreferenceAccessFilter;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}