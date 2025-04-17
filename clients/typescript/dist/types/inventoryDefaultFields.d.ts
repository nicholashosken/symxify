import { VersionType } from "./versionType";
export interface InventoryDefaultFields {
    cost: boolean | null;
    inventoryType: boolean | null;
    locationCode: boolean | null;
    price: boolean | null;
    quantity: boolean | null;
    standardFee: boolean | null;
    status: boolean | null;
    termFrequency: boolean | null;
    termPeriod: boolean | null;
    type: boolean | null;
    version1: VersionType;
}
