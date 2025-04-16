import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface InventoryDefault {
    costValue: number;
    costValueSpecified: boolean;
    cost: number | null;
    faceValueValue: number;
    faceValueValueSpecified: boolean;
    faceValue: number | null;
    inventoryTypeValue: number;
    inventoryTypeValueSpecified: boolean;
    inventoryType: number | null;
    locationCode: string;
    priceValue: number;
    priceValueSpecified: boolean;
    price: number | null;
    quantityValue: number;
    quantityValueSpecified: boolean;
    quantity: number | null;
    standardFeeValue: number;
    standardFeeValueSpecified: boolean;
    standardFee: number | null;
    statusValue: number;
    statusValueSpecified: boolean;
    status: number | null;
    termFrequencyValue: number;
    termFrequencyValueSpecified: boolean;
    termFrequency: number | null;
    termPeriodValue: number;
    termPeriodValueSpecified: boolean;
    termPeriod: number | null;
    typeValue: number;
    typeValueSpecified: boolean;
    type: number | null;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}