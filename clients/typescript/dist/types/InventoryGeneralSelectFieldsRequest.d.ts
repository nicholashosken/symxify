import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { InventoryGeneralSingleSelectableFields } from "./inventoryGeneralSingleSelectableFields";
import { VersionType } from "./versionType";
export interface InventoryGeneralSelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: InventoryGeneralSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
