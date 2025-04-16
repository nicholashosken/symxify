import { InventoryGeneral } from "./inventoryGeneral";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface InventoryGeneralSelectFieldsResponse {
    inventoryGeneral: InventoryGeneral;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}