import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { ParticipantSingleSelectableFields } from "./participantSingleSelectableFields";
import { VersionType } from "./versionType";

export interface ParticipantSelectFieldsRequest {
    participantNumber: string;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: ParticipantSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}