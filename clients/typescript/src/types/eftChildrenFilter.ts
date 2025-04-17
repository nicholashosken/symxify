import { EftAddendaInfoFilter } from "./eftAddendaInfoFilter";
import { EftNameFilter } from "./eftNameFilter";
import { EftTransferFilter } from "./eftTransferFilter";
import { VersionType } from "./versionType";

export interface EftChildrenFilter {
    eftAddendaInfoFilter: EftAddendaInfoFilter;
    eftNameFilter: EftNameFilter;
    eftTransferFilter: EftTransferFilter;
    version1: VersionType;
}