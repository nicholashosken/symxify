import { VersionType } from "./versionType";
export interface CollateralFmHistoryFilter {
    startPostDate: string | null;
    endPostDate: string | null;
    query: string;
    version1: VersionType;
}
