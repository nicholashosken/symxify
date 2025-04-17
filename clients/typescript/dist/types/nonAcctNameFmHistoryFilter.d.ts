import { VersionType } from "./versionType";
export interface NonAcctNameFmHistoryFilter {
    startPostDate: string | null;
    endPostDate: string | null;
    query: string;
    version1: VersionType;
}
