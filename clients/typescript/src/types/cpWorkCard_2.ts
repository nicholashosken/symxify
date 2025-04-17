import { CpWorkCardSecCollectorId_2 } from "./cpWorkCardSecCollectorId_2";
import { CpWorkCardSecPriority_2 } from "./cpWorkCardSecPriority_2";
import { VersionType } from "./versionType";

export interface CpWorkCard_2 {
    active: number | null;
    closeDate: string | null;
    fmLastDate: string | null;
    lastCollectorId: number | null;
    lastWorkDate: string | null;
    lastWorktime: number | null;
    locator: number | null;
    nextWorkDate: string | null;
    notePurgeDate: string | null;
    priority: string;
    recordChangeDate: string | null;
    secCollectorId: CpWorkCardSecCollectorId_2[];
    secPriority: CpWorkCardSecPriority_2[];
    type: number | null;
    version1: VersionType;
}