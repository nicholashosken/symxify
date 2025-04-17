import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { ParticipantFmHistorySingleSelectableFields } from "./participantFmHistorySingleSelectableFields";
import { ParticipantFmHistorySearchFilter } from "./participantFmHistorySearchFilter";
import { VersionType } from "./versionType";

export interface ParticipantFmHistorySearchPagedSelectFieldsRequest {
    participantNumber: string;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: ParticipantFmHistorySingleSelectableFields;
    searchFilter: ParticipantFmHistorySearchFilter;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}