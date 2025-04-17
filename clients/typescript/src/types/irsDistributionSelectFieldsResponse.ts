import { IrsDistribution } from "./irsDistribution";
import { VersionType } from "./versionType";

export interface IrsDistributionSelectFieldsResponse {
    irsDistribution: IrsDistribution;
    version1: VersionType;
    messageId: string;
}