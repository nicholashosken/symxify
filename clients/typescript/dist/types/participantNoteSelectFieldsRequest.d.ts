import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { ParticipantNoteSingleSelectableFields } from "./participantNoteSingleSelectableFields";
import { VersionType } from "./versionType";
export interface ParticipantNoteSelectFieldsRequest {
    participantNumber: string;
    participantNoteLocator: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: ParticipantNoteSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
