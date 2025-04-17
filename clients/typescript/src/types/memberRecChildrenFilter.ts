import { MemberRecFmHistoryFilter } from "./memberRecFmHistoryFilter";
import { VersionType } from "./versionType";

export interface MemberRecChildrenFilter {
    memberRecFmHistoryFilter: MemberRecFmHistoryFilter;
    version1: VersionType;
}