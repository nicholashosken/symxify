import { IdType } from "./idType";
import { VersionType } from "./versionType";

export interface ProductDetails {
    id: string;
    idType: IdType | null;
    balance: number | null;
    availableBalance: number | null;
    description: string;
    accountNumber: string;
    name: string;
    accountTrackingType: number | null;
    version1: VersionType;
}