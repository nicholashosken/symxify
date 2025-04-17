import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { InventoryDefaultFields_2 } from "./inventoryDefaultFields_2";
import { VersionType } from "./versionType";
export interface UpdateInventoryDefaultByIdRequest {
    inventoryDefaultInventoryType: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    inventoryDefaultFields: InventoryDefaultFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
