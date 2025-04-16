import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { StmtMessagesSingleSelectableFields } from "./stmtMessagesSingleSelectableFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface StmtMessagesSelectFieldsRequest {
    stmtMessagesStatementMessageCodeValue: number;
    stmtMessagesStatementMessageCodeValueSpecified: boolean;
    stmtMessagesStatementMessageCode: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: StmtMessagesSingleSelectableFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}