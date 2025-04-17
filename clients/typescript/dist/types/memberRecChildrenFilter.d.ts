import { MemberRecFmHistoryFilter } from "./memberRecFmHistoryFilter";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface MemberRecChildrenFilter {
    memberRecFmHistoryFilter: MemberRecFmHistoryFilter;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
