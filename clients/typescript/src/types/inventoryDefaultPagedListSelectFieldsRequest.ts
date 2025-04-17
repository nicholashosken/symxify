import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { InventoryDefaultSingleSelectableFields } from "./inventoryDefaultSingleSelectableFields";
import { VersionType } from "./versionType";

export interface InventoryDefaultPagedListSelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: InventoryDefaultSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}