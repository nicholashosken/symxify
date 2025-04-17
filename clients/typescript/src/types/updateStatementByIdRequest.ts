import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { StatementFields_2 } from "./statementFields_2";
import { VersionType } from "./versionType";

export interface UpdateStatementByIdRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    statementFields: StatementFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}