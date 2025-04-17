import { Participant } from "./participant";
import { VersionType } from "./versionType";

export interface ParticipantSelectFieldsResponse {
    participant: Participant;
    version1: VersionType;
    messageId: string;
}