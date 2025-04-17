import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { IntTypeSingleSelectableFields } from "./intTypeSingleSelectableFields";
import { IntTypeSearchFilter } from "./intTypeSearchFilter";
import { VersionType } from "./versionType";

export interface IntTypeSearchPagedSelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: IntTypeSingleSelectableFields;
    searchFilter: IntTypeSearchFilter;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}