import { VersionType } from "./versionType";
export interface CollateralFmHistorySearchFilter {
    startPostDate: string | null;
    endPostDate: string | null;
    query: string;
    version1: VersionType;
}
