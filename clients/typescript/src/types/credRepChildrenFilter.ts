import { CredRepItemFilter } from "./credRepItemFilter";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface CredRepChildrenFilter {
    credRepItemFilter: CredRepItemFilter;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}