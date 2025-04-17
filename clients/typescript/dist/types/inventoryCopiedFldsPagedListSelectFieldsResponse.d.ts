import { InventoryCopiedFlds } from "./inventoryCopiedFlds";
import { VersionType } from "./versionType";
export interface InventoryCopiedFldsPagedListSelectFieldsResponse {
    inventoryCopiedFlds: InventoryCopiedFlds[];
    token: string;
    version1: VersionType;
    messageId: string;
}
