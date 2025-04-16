import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface HouseholdSearchFilter {
    query: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}