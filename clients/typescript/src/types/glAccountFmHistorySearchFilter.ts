import { VersionType } from "./versionType";

export interface GlAccountFmHistorySearchFilter {
    startPostDate: string | null;
    endPostDate: string | null;
    query: string;
    version1: VersionType;
}