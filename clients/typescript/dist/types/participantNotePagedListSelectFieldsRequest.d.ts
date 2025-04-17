import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { ParticipantNoteSingleSelectableFields } from "./participantNoteSingleSelectableFields";
import { VersionType } from "./versionType";
export interface ParticipantNotePagedListSelectFieldsRequest {
    participantNumber: string;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: ParticipantNoteSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
