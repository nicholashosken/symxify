import { ExcpAddInfoFilter } from "./excpAddInfoFilter";
import { ExcpAddendaFilter } from "./excpAddendaFilter";
import { VersionType } from "./versionType";

export interface ExcpItemChildrenFilter {
    excpAddInfoFilter: ExcpAddInfoFilter;
    excpAddendaFilter: ExcpAddendaFilter;
    version1: VersionType;
}