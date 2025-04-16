import { ParticipantFieldName } from "./participantFieldName";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface ParticipantFieldNameSelectFieldsResponse {
    participantFieldName: ParticipantFieldName;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
