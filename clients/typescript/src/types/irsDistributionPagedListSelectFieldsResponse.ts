import { IrsDistribution } from "./irsDistribution";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface IrsDistributionPagedListSelectFieldsResponse {
    irsDistribution: IrsDistribution[];
    irsDistributionSpecified: boolean;
    token: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}