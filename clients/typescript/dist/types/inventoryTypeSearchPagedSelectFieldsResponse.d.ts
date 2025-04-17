import { InventoryType } from "./inventoryType";
import { VersionType } from "./versionType";
export interface InventoryTypeSearchPagedSelectFieldsResponse {
    inventoryType: InventoryType[];
    token: string;
    version1: VersionType;
    messageId: string;
}
