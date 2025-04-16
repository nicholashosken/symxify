import { IrsDistributionFilter } from "./irsDistributionFilter";
import { IrsNameFilter } from "./irsNameFilter";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface IrsChildrenFilter {
    irsDistributionFilter: IrsDistributionFilter;
    irsNameFilter: IrsNameFilter;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}