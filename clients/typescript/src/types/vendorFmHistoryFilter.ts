import { VersionType } from "./versionType";

export interface VendorFmHistoryFilter {
    startPostDate: string | null;
    endPostDate: string | null;
    query: string;
    version1: VersionType;
}