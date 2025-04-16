import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { InventoryDefaultFields_2 } from "./inventoryDefaultFields_2";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface UpdateInventoryDefaultByIdRequest {
    inventoryDefaultInventoryTypeValue: number;
    inventoryDefaultInventoryTypeValueSpecified: boolean;
    inventoryDefaultInventoryType: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    inventoryDefaultFields: InventoryDefaultFields_2;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}