import { SiteCashOrderTypeFilter } from "./siteCashOrderTypeFilter";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface SiteChildrenFilter {
    siteCashOrderTypeFilter: SiteCashOrderTypeFilter;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}