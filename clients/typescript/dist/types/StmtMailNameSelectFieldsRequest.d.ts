import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { StmtMailNameSingleSelectableFields } from "./stmtMailNameSingleSelectableFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface StmtMailNameSelectFieldsRequest {
    stmtMailNameStatementMailCodeValue: number;
    stmtMailNameStatementMailCodeValueSpecified: boolean;
    stmtMailNameStatementMailCode: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: StmtMailNameSingleSelectableFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}
