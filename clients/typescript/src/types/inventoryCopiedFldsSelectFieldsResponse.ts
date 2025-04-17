import { InventoryCopiedFlds } from "./inventoryCopiedFlds";
import { VersionType } from "./versionType";

export interface InventoryCopiedFldsSelectFieldsResponse {
    inventoryCopiedFlds: InventoryCopiedFlds;
    version1: VersionType;
    messageId: string;
}