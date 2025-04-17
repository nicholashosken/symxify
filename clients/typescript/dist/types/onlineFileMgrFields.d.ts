import { VersionType } from "./versionType";
export interface OnlineFileMgrFields {
    cycleActiveFrom: boolean | null;
    cycleActiveUntil: boolean | null;
    highPriorityFraudTrackType: boolean | null;
    journalFormat: boolean | null;
    pauseBetweenCycles: boolean | null;
    saveRejectedMsgsInDialog: boolean | null;
    sendDeleteOnDataException: boolean | null;
    version1: VersionType;
}
