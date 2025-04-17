import { EpisysDbExtractExtractDate } from "./episysDbExtractExtractDate";
import { VersionType } from "./versionType";

export interface EpisysDbExtract {
    extractDate: EpisysDbExtractExtractDate[];
    version1: VersionType;
}