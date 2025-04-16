import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface PreferenceAccessFilter {
    query: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
