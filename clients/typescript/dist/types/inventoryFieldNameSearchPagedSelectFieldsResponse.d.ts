import { InventoryFieldName } from "./inventoryFieldName";
import { VersionType } from "./versionType";
export interface InventoryFieldNameSearchPagedSelectFieldsResponse {
    inventoryFieldName: InventoryFieldName[];
    token: string;
    version1: VersionType;
    messageId: string;
}
