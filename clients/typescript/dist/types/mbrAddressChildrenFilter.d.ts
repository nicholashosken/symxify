import { MbrAddressFmHistoryFilter } from "./mbrAddressFmHistoryFilter";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface MbrAddressChildrenFilter {
    mbrAddressFmHistoryFilter: MbrAddressFmHistoryFilter;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
