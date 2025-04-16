import { IrsDistribution } from "./irsDistribution";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface IrsDistributionSelectFieldsResponse {
    irsDistribution: IrsDistribution;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}