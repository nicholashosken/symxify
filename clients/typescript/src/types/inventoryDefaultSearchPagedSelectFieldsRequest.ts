import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { InventoryDefaultSingleSelectableFields } from "./inventoryDefaultSingleSelectableFields";
import { InventoryDefaultSearchFilter } from "./inventoryDefaultSearchFilter";
import { VersionType } from "./versionType";

export interface InventoryDefaultSearchPagedSelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: InventoryDefaultSingleSelectableFields;
    searchFilter: InventoryDefaultSearchFilter;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}