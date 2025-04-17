import { IrsDistributionFilter } from "./irsDistributionFilter";
import { IrsNameFilter } from "./irsNameFilter";
import { VersionType } from "./versionType";

export interface IrsChildrenFilter {
    irsDistributionFilter: IrsDistributionFilter;
    irsNameFilter: IrsNameFilter;
    version1: VersionType;
}