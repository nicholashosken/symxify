import { InventoryCopiedFlds } from "./inventoryCopiedFlds";
import { VersionType } from "./versionType";

export interface InventoryCopiedFldsSearchPagedSelectFieldsResponse {
    inventoryCopiedFlds: InventoryCopiedFlds[];
    token: string;
    version1: VersionType;
    messageId: string;
}