import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { InventoryFieldNameFields_2 } from "./inventoryFieldNameFields_2";
import { VersionType } from "./versionType";
export interface UpdateInventoryFieldNameByIdRequest {
    inventoryFieldNameField: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    inventoryFieldNameFields: InventoryFieldNameFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
