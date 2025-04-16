import { ParticipantFieldName } from "./participantFieldName";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface ParticipantFieldNamePagedListSelectFieldsResponse {
    participantFieldName: ParticipantFieldName[];
    participantFieldNameSpecified: boolean;
    token: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}