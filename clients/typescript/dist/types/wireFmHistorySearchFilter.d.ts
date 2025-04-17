import { VersionType } from "./versionType";
export interface WireFmHistorySearchFilter {
    startPostDate: string | null;
    endPostDate: string | null;
    query: string;
    version1: VersionType;
}
