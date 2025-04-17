import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { InventoryFieldNameSingleSelectableFields } from "./inventoryFieldNameSingleSelectableFields";
import { VersionType } from "./versionType";
export interface InventoryFieldNameSelectFieldsRequest {
    inventoryFieldNameField: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: InventoryFieldNameSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
