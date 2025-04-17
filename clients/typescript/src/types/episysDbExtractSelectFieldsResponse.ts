import { EpisysDbExtract } from "./episysDbExtract";
import { VersionType } from "./versionType";

export interface EpisysDbExtractSelectFieldsResponse {
    episysDbExtract: EpisysDbExtract;
    version1: VersionType;
    messageId: string;
}