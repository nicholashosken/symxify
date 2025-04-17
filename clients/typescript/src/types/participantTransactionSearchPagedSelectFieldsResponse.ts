import { ParticipantTransaction } from "./participantTransaction";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface ParticipantTransactionSearchPagedSelectFieldsResponse {
    participantTransaction: ParticipantTransaction[];
    participantTransactionSpecified: boolean;
    token: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}