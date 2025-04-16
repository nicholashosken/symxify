import { EftAddendaInfoFilter } from "./eftAddendaInfoFilter";
import { EftNameFilter } from "./eftNameFilter";
import { EftTransferFilter } from "./eftTransferFilter";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface EftChildrenFilter {
    eftAddendaInfoFilter: EftAddendaInfoFilter;
    eftNameFilter: EftNameFilter;
    eftTransferFilter: EftTransferFilter;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}