import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { InventoryTypeFields_2 } from "./inventoryTypeFields_2";
import { VersionType } from "./versionType";
export interface UpdateInventoryTypeByIdRequest {
    inventoryTypeInventoryType: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    inventoryTypeFields: InventoryTypeFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
