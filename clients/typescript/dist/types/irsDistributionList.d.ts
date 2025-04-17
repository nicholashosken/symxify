import { IrsDistribution } from "./irsDistribution";
export interface IrsDistributionList {
    hasReachedMaximumListSize: boolean | null;
    irsDistribution: IrsDistribution[];
}
