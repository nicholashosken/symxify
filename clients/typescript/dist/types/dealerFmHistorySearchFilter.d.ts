import { VersionType } from "./versionType";
export interface DealerFmHistorySearchFilter {
    startPostDate: string | null;
    endPostDate: string | null;
    query: string;
    version1: VersionType;
}
