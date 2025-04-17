import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { InventoryGeneralFields_2 } from "./inventoryGeneralFields_2";
import { VersionType } from "./versionType";

export interface UpdateInventoryGeneralByIdRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    inventoryGeneralFields: InventoryGeneralFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}