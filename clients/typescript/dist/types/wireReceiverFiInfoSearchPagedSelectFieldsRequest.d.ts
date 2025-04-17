import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { WireReceiverFiInfoSingleSelectableFields } from "./wireReceiverFiInfoSingleSelectableFields";
import { WireReceiverFiInfoSearchFilter } from "./wireReceiverFiInfoSearchFilter";
import { VersionType } from "./versionType";
export interface WireReceiverFiInfoSearchPagedSelectFieldsRequest {
    wireSequenceNumber: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: WireReceiverFiInfoSingleSelectableFields;
    searchFilter: WireReceiverFiInfoSearchFilter;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
