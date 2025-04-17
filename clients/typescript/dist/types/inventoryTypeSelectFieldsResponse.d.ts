import { InventoryType } from "./inventoryType";
import { VersionType } from "./versionType";
export interface InventoryTypeSelectFieldsResponse {
    inventoryType: InventoryType;
    version1: VersionType;
    messageId: string;
}
