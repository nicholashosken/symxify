import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { ParticipantSelectableFields } from "./participantSelectableFields";
import { ParticipantChildrenFilter } from "./participantChildrenFilter";
import { VersionType } from "./versionType";

export interface ParticipantSelectFieldsFilterChildrenRequest {
    participantNumber: string;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: ParticipantSelectableFields;
    childrenSearchFilter: ParticipantChildrenFilter;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}