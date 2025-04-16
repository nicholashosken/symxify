import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface OnlineFileMgr {
    cycleActiveFromValue: number;
    cycleActiveFromValueSpecified: boolean;
    cycleActiveFrom: number | null;
    cycleActiveUntilValue: number;
    cycleActiveUntilValueSpecified: boolean;
    cycleActiveUntil: number | null;
    highPriorityFraudTrackTypeValue: number;
    highPriorityFraudTrackTypeValueSpecified: boolean;
    highPriorityFraudTrackType: number | null;
    journalFormatValue: number;
    journalFormatValueSpecified: boolean;
    journalFormat: number | null;
    pauseBetweenCyclesValue: number;
    pauseBetweenCyclesValueSpecified: boolean;
    pauseBetweenCycles: number | null;
    saveRejectedMsgsInDialogValue: boolean;
    saveRejectedMsgsInDialogValueSpecified: boolean;
    saveRejectedMsgsInDialog: boolean | null;
    sendDeleteOnDataExceptionValue: boolean;
    sendDeleteOnDataExceptionValueSpecified: boolean;
    sendDeleteOnDataException: boolean | null;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}