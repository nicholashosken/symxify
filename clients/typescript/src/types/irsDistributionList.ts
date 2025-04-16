import { IrsDistribution } from "./irsDistribution";

export interface IrsDistributionList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    irsDistribution: IrsDistribution[];
    irsDistributionSpecified: boolean;
}