import { ExcpAddInfoFilter } from "./excpAddInfoFilter";
import { ExcpAddendaFilter } from "./excpAddendaFilter";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface ExcpItemChildrenFilter {
    excpAddInfoFilter: ExcpAddInfoFilter;
    excpAddendaFilter: ExcpAddendaFilter;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
