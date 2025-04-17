import { VersionType } from "./versionType";
export interface ParticipantFmHistoryFilter {
    startPostDate: string | null;
    endPostDate: string | null;
    query: string;
    version1: VersionType;
}
