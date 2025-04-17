import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { InventoryTypeSingleSelectableFields } from "./inventoryTypeSingleSelectableFields";
import { InventoryTypeSearchFilter } from "./inventoryTypeSearchFilter";
import { VersionType } from "./versionType";
export interface InventoryTypeSearchPagedSelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: InventoryTypeSingleSelectableFields;
    searchFilter: InventoryTypeSearchFilter;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
