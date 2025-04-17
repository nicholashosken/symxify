import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { InventoryCopiedFldsFields_2 } from "./inventoryCopiedFldsFields_2";
import { VersionType } from "./versionType";

export interface UpdateInventoryCopiedFldsByIdRequest {
    inventoryCopiedFldsInventoryScreenType: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    inventoryCopiedFldsFields: InventoryCopiedFldsFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}