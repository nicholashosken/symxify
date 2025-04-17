import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { InventoryFieldNameSingleSelectableFields } from "./inventoryFieldNameSingleSelectableFields";
import { InventoryFieldNameSearchFilter } from "./inventoryFieldNameSearchFilter";
import { VersionType } from "./versionType";

export interface InventoryFieldNameSearchPagedSelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: InventoryFieldNameSingleSelectableFields;
    searchFilter: InventoryFieldNameSearchFilter;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}