import { MbrAddressFmHistoryFilter } from "./mbrAddressFmHistoryFilter";
import { VersionType } from "./versionType";

export interface MbrAddressChildrenFilter {
    mbrAddressFmHistoryFilter: MbrAddressFmHistoryFilter;
    version1: VersionType;
}