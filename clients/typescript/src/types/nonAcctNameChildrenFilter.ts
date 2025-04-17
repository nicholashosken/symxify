import { NonAcctNameFmHistoryFilter } from "./nonAcctNameFmHistoryFilter";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface NonAcctNameChildrenFilter {
    nonAcctNameFmHistoryFilter: NonAcctNameFmHistoryFilter;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}