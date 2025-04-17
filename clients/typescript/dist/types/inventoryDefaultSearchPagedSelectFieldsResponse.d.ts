import { InventoryDefault } from "./inventoryDefault";
import { VersionType } from "./versionType";
export interface InventoryDefaultSearchPagedSelectFieldsResponse {
    inventoryDefault: InventoryDefault[];
    token: string;
    version1: VersionType;
    messageId: string;
}
