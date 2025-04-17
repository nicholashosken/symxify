import { IdType } from "./idType";
import { VersionType } from "./versionType";

export interface LookupResult {
    accountNumber: string;
    idType: IdType | null;
    id: string;
    version1: VersionType;
}