import { VersionType } from "./versionType";
export interface OnlineFileMgr {
    cycleActiveFrom: number | null;
    cycleActiveUntil: number | null;
    highPriorityFraudTrackType: number | null;
    journalFormat: number | null;
    pauseBetweenCycles: number | null;
    saveRejectedMsgsInDialog: boolean | null;
    sendDeleteOnDataException: boolean | null;
    version1: VersionType;
}
