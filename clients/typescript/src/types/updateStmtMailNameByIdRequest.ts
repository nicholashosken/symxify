import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { StmtMailNameFields_2 } from "./stmtMailNameFields_2";
import { VersionType } from "./versionType";

export interface UpdateStmtMailNameByIdRequest {
    stmtMailNameStatementMailCode: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    stmtMailNameFields: StmtMailNameFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}