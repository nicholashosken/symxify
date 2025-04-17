import { VersionType } from "./versionType";
export interface NonAcctNameFmHistorySearchFilter {
    startPostDate: string | null;
    endPostDate: string | null;
    query: string;
    version1: VersionType;
}
