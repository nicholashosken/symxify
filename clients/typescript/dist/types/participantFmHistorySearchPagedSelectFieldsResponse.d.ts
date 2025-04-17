import { ParticipantFmHistory } from "./participantFmHistory";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface ParticipantFmHistorySearchPagedSelectFieldsResponse {
    participantFmHistory: ParticipantFmHistory[];
    participantFmHistorySpecified: boolean;
    token: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
