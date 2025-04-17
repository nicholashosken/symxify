import { InventoryDefault } from "./inventoryDefault";
import { VersionType } from "./versionType";
export interface InventoryDefaultSelectFieldsResponse {
    inventoryDefault: InventoryDefault;
    version1: VersionType;
    messageId: string;
}
