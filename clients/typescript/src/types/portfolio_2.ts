import { VersionType } from "./versionType";

export interface Portfolio_2 {
    availableBalance: number | null;
    balance: number | null;
    closeDate: string | null;
    description: string;
    fmLastDate: string | null;
    id: string;
    notePurgeDate: string | null;
    recordChangeDate: string | null;
    version1: VersionType;
}