import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { ParticipantTransactionSingleSelectableFields } from "./participantTransactionSingleSelectableFields";
import { ParticipantTransactionSearchFilter } from "./participantTransactionSearchFilter";
import { VersionType } from "./versionType";

export interface ParticipantTransactionSearchPagedSelectFieldsRequest {
    participantNumber: string;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: ParticipantTransactionSingleSelectableFields;
    searchFilter: ParticipantTransactionSearchFilter;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}