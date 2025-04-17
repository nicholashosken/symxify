import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { WireIntermedFiInfoSingleSelectableFields } from "./wireIntermedFiInfoSingleSelectableFields";
import { WireIntermedFiInfoSearchFilter } from "./wireIntermedFiInfoSearchFilter";
import { VersionType } from "./versionType";
export interface WireIntermedFiInfoSearchPagedSelectFieldsRequest {
    wireSequenceNumber: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: WireIntermedFiInfoSingleSelectableFields;
    searchFilter: WireIntermedFiInfoSearchFilter;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
