import { VersionType } from "./versionType";

export interface ShareFieldName {
    field: number | null;
    fieldName: string;
    version1: VersionType;
}