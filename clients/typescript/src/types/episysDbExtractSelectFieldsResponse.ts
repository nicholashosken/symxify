import { EpisysDbExtract } from "./episysDbExtract";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface EpisysDbExtractSelectFieldsResponse {
    episysDbExtract: EpisysDbExtract;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}