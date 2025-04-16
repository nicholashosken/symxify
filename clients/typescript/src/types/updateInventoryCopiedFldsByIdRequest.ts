import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { InventoryCopiedFldsFields_2 } from "./inventoryCopiedFldsFields_2";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface UpdateInventoryCopiedFldsByIdRequest {
    inventoryCopiedFldsInventoryScreenTypeValue: number;
    inventoryCopiedFldsInventoryScreenTypeValueSpecified: boolean;
    inventoryCopiedFldsInventoryScreenType: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    inventoryCopiedFldsFields: InventoryCopiedFldsFields_2;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}