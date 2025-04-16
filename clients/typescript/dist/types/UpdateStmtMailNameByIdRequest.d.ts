import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { StmtMailNameFields_2 } from "./stmtMailNameFields_2";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface UpdateStmtMailNameByIdRequest {
    stmtMailNameStatementMailCodeValue: number;
    stmtMailNameStatementMailCodeValueSpecified: boolean;
    stmtMailNameStatementMailCode: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    stmtMailNameFields: StmtMailNameFields_2;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}
