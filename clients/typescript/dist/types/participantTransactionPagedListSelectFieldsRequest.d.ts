import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { ParticipantTransactionSingleSelectableFields } from "./participantTransactionSingleSelectableFields";
import { VersionType } from "./versionType";
export interface ParticipantTransactionPagedListSelectFieldsRequest {
    participantNumber: string;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: ParticipantTransactionSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
