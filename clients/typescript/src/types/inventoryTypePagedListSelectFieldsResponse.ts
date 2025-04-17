import { InventoryType } from "./inventoryType";
import { VersionType } from "./versionType";

export interface InventoryTypePagedListSelectFieldsResponse {
    inventoryType: InventoryType[];
    token: string;
    version1: VersionType;
    messageId: string;
}