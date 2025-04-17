import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { InventoryDefaultSingleSelectableFields } from "./inventoryDefaultSingleSelectableFields";
import { VersionType } from "./versionType";

export interface InventoryDefaultSelectFieldsRequest {
    inventoryDefaultInventoryType: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: InventoryDefaultSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}