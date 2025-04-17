import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { InventoryCopiedFldsSingleSelectableFields } from "./inventoryCopiedFldsSingleSelectableFields";
import { VersionType } from "./versionType";
export interface InventoryCopiedFldsSelectFieldsRequest {
    inventoryCopiedFldsInventoryScreenType: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: InventoryCopiedFldsSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
