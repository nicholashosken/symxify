import { ParticipantFmHistoryFilter } from "./participantFmHistoryFilter";
import { ParticipantNoteFilter } from "./participantNoteFilter";
import { ParticipantTransactionFilter } from "./participantTransactionFilter";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface ParticipantChildrenFilter {
    participantFmHistoryFilter: ParticipantFmHistoryFilter;
    participantNoteFilter: ParticipantNoteFilter;
    participantTransactionFilter: ParticipantTransactionFilter;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}