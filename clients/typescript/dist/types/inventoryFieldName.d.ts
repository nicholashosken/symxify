import { VersionType } from "./versionType";
export interface InventoryFieldName {
    field: number | null;
    fieldName: string;
    version1: VersionType;
}
