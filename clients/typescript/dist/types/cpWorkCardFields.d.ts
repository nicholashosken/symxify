import { VersionType } from "./versionType";
export interface CpWorkCardFields {
    active: boolean | null;
    closeDate: boolean | null;
    fmLastDate: boolean | null;
    lastCollectorId: boolean | null;
    lastWorkDate: boolean | null;
    lastWorktime: boolean | null;
    locator: boolean | null;
    nextWorkDate: boolean | null;
    notePurgeDate: boolean | null;
    priority: boolean | null;
    recordChangeDate: boolean | null;
    secCollectorId: number[];
    secPriority: number[];
    type: boolean | null;
    version1: VersionType;
}
