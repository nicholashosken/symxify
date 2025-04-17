import { CheckFmHistoryFilter } from "./checkFmHistoryFilter";
import { VersionType } from "./versionType";

export interface CheckChildrenFilter {
    checkFmHistoryFilter: CheckFmHistoryFilter;
    version1: VersionType;
}