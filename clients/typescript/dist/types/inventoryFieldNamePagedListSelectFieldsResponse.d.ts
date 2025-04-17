import { InventoryFieldName } from "./inventoryFieldName";
import { VersionType } from "./versionType";
export interface InventoryFieldNamePagedListSelectFieldsResponse {
    inventoryFieldName: InventoryFieldName[];
    token: string;
    version1: VersionType;
    messageId: string;
}
