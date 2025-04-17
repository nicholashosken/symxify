import { PrimaryKeyField } from "./primaryKeyField";
import { VersionType } from "./versionType";

export interface FailedUpdateStatus {
    record: string;
    errorCode: string;
    errorMessage: string;
    primaryKeyField: PrimaryKeyField[];
    version1: VersionType;
}