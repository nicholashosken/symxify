import { VersionType } from "./versionType";

export interface LoanFieldName {
    field: number | null;
    fieldName: string;
    version1: VersionType;
}