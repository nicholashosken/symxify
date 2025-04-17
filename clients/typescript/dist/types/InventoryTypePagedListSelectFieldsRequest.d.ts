import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { InventoryTypeSingleSelectableFields } from "./inventoryTypeSingleSelectableFields";
import { VersionType } from "./versionType";
export interface InventoryTypePagedListSelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: InventoryTypeSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
