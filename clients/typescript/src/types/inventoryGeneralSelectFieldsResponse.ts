import { InventoryGeneral } from "./inventoryGeneral";
import { VersionType } from "./versionType";

export interface InventoryGeneralSelectFieldsResponse {
    inventoryGeneral: InventoryGeneral;
    version1: VersionType;
    messageId: string;
}