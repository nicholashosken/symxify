import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { StmtMessagesFields_2 } from "./stmtMessagesFields_2";
import { VersionType } from "./versionType";

export interface UpdateStmtMessagesByIdRequest {
    stmtMessagesStatementMessageCode: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    stmtMessagesFields: StmtMessagesFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}