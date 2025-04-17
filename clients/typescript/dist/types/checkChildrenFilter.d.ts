import { CheckFmHistoryFilter } from "./checkFmHistoryFilter";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface CheckChildrenFilter {
    checkFmHistoryFilter: CheckFmHistoryFilter;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
