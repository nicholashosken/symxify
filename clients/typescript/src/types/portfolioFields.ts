import { VersionType } from "./versionType";

export interface PortfolioFields {
    availableBalance: boolean | null;
    balance: boolean | null;
    closeDate: boolean | null;
    description: boolean | null;
    fmLastDate: boolean | null;
    id: boolean | null;
    notePurgeDate: boolean | null;
    recordChangeDate: boolean | null;
    version1: VersionType;
}