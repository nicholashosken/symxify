import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PartStatementFields_2 } from "./partStatementFields_2";
import { VersionType } from "./versionType";

export interface UpdatePartStatementByIdRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    partStatementFields: PartStatementFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}