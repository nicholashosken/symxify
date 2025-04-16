import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { InventoryGeneralFields_2 } from "./inventoryGeneralFields_2";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface UpdateInventoryGeneralByIdRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    inventoryGeneralFields: InventoryGeneralFields_2;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}
