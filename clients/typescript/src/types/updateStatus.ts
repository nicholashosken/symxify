import { FailedUpdateStatus } from "./failedUpdateStatus";
import { VersionType } from "./versionType";

export interface UpdateStatus {
    isAllFieldsUpdateSuccess: boolean;
    failedUpdateStatus: FailedUpdateStatus;
    version1: VersionType;
}