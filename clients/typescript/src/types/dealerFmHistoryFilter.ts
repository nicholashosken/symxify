import { VersionType } from "./versionType";

export interface DealerFmHistoryFilter {
    startPostDate: string | null;
    endPostDate: string | null;
    query: string;
    version1: VersionType;
}