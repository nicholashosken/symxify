import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { WireFiToFiInfoSingleSelectableFields } from "./wireFiToFiInfoSingleSelectableFields";
import { WireFiToFiInfoSearchFilter } from "./wireFiToFiInfoSearchFilter";
import { VersionType } from "./versionType";

export interface WireFiToFiInfoSearchPagedSelectFieldsRequest {
    wireSequenceNumber: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: WireFiToFiInfoSingleSelectableFields;
    searchFilter: WireFiToFiInfoSearchFilter;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}