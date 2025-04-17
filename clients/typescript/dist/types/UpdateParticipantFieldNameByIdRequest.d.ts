import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { ParticipantFieldNameFields_2 } from "./participantFieldNameFields_2";
import { VersionType } from "./versionType";
export interface UpdateParticipantFieldNameByIdRequest {
    participantFieldNameField: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    participantFieldNameFields: ParticipantFieldNameFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
