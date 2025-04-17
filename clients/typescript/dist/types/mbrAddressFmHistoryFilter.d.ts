import { VersionType } from "./versionType";
export interface MbrAddressFmHistoryFilter {
    startPostDate: string | null;
    endPostDate: string | null;
    query: string;
    version1: VersionType;
}
