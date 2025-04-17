import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { ExcpAddInfoSingleSelectableFields } from "./excpAddInfoSingleSelectableFields";
import { ExcpAddInfoSearchFilter } from "./excpAddInfoSearchFilter";
import { VersionType } from "./versionType";

export interface ExcpAddInfoSearchPagedSelectFieldsRequest {
    excpItemGlobalSequenceDate: string | null;
    excpItemGlobalSequence: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: ExcpAddInfoSingleSelectableFields;
    searchFilter: ExcpAddInfoSearchFilter;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}