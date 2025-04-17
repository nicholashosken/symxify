import { Participant } from "./participant";
import { VersionType } from "./versionType";

export interface ParticipantSelectFieldsFilterChildrenResponse {
    participant: Participant;
    version1: VersionType;
    messageId: string;
}