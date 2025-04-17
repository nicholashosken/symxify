import { VersionType } from "./versionType";

export interface AccountFieldName {
    field: number | null;
    fieldName: string;
    version1: VersionType;
}