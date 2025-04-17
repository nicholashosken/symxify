import { IrsDistribution } from "./irsDistribution";
import { VersionType } from "./versionType";

export interface IrsDistributionSearchPagedSelectFieldsResponse {
    irsDistribution: IrsDistribution[];
    token: string;
    version1: VersionType;
    messageId: string;
}