import { VersionType } from "./versionType";
export interface PlanFieldName {
    field: number | null;
    fieldName: string;
    version1: VersionType;
}
