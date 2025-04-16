import { IdType } from "./idType";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface ProductDetails {
    id: string;
    idTypeValue: IdType;
    idTypeValueSpecified: boolean;
    idType: IdType | null;
    balanceValue: number;
    balanceValueSpecified: boolean;
    balance: number | null;
    availableBalanceValue: number;
    availableBalanceValueSpecified: boolean;
    availableBalance: number | null;
    description: string;
    accountNumber: string;
    name: string;
    accountTrackingTypeValue: number;
    accountTrackingTypeValueSpecified: boolean;
    accountTrackingType: number | null;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}