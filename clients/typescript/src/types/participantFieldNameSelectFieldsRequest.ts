import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { ParticipantFieldNameSingleSelectableFields } from "./participantFieldNameSingleSelectableFields";
import { VersionType } from "./versionType";

export interface ParticipantFieldNameSelectFieldsRequest {
    participantFieldNameField: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: ParticipantFieldNameSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}