import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { ParticipantNoteSingleSelectableFields } from "./participantNoteSingleSelectableFields";
import { ParticipantNoteSearchFilter } from "./participantNoteSearchFilter";
import { VersionType } from "./versionType";
export interface ParticipantNoteSearchPagedSelectFieldsRequest {
    participantNumber: string;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: ParticipantNoteSingleSelectableFields;
    searchFilter: ParticipantNoteSearchFilter;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
