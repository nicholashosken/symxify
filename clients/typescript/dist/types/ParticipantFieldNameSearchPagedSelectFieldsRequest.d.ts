import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { ParticipantFieldNameSingleSelectableFields } from "./participantFieldNameSingleSelectableFields";
import { ParticipantFieldNameSearchFilter } from "./participantFieldNameSearchFilter";
import { VersionType } from "./versionType";
export interface ParticipantFieldNameSearchPagedSelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: ParticipantFieldNameSingleSelectableFields;
    searchFilter: ParticipantFieldNameSearchFilter;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
