import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { InventoryTypeSingleSelectableFields } from "./inventoryTypeSingleSelectableFields";
import { VersionType } from "./versionType";
export interface InventoryTypeSelectFieldsRequest {
    inventoryTypeInventoryType: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: InventoryTypeSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
