import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { WireIntermedFiAdvSingleSelectableFields } from "./wireIntermedFiAdvSingleSelectableFields";
import { WireIntermedFiAdvSearchFilter } from "./wireIntermedFiAdvSearchFilter";
import { VersionType } from "./versionType";
export interface WireIntermedFiAdvSearchPagedSelectFieldsRequest {
    wireSequenceNumber: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: WireIntermedFiAdvSingleSelectableFields;
    searchFilter: WireIntermedFiAdvSearchFilter;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
