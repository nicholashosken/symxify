import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface OnlineFileMgrFields {
    cycleActiveFromValue: boolean;
    cycleActiveFromValueSpecified: boolean;
    cycleActiveFrom: boolean | null;
    cycleActiveUntilValue: boolean;
    cycleActiveUntilValueSpecified: boolean;
    cycleActiveUntil: boolean | null;
    highPriorityFraudTrackTypeValue: boolean;
    highPriorityFraudTrackTypeValueSpecified: boolean;
    highPriorityFraudTrackType: boolean | null;
    journalFormatValue: boolean;
    journalFormatValueSpecified: boolean;
    journalFormat: boolean | null;
    pauseBetweenCyclesValue: boolean;
    pauseBetweenCyclesValueSpecified: boolean;
    pauseBetweenCycles: boolean | null;
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
