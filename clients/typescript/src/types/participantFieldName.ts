import { VersionType } from "./versionType";

export interface ParticipantFieldName {
    field: number | null;
    fieldName: string;
    version1: VersionType;
}