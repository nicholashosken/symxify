import { Participant } from "./participant";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface ParticipantSelectFieldsResponse {
    participant: Participant;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
