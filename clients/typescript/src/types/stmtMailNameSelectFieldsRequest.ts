import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { StmtMailNameSingleSelectableFields } from "./stmtMailNameSingleSelectableFields";
import { VersionType } from "./versionType";

export interface StmtMailNameSelectFieldsRequest {
    stmtMailNameStatementMailCode: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: StmtMailNameSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}