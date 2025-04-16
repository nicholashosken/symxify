import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { StmtMessagesFields_2 } from "./stmtMessagesFields_2";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface UpdateStmtMessagesByIdRequest {
    stmtMessagesStatementMessageCodeValue: number;
    stmtMessagesStatementMessageCodeValueSpecified: boolean;
    stmtMessagesStatementMessageCode: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    stmtMessagesFields: StmtMessagesFields_2;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}
