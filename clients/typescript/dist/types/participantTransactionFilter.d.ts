import { VersionType } from "./versionType";
export interface ParticipantTransactionFilter {
    startPostDate: string | null;
    endPostDate: string | null;
    query: string;
    version1: VersionType;
}
