import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { StmtMessagesSingleSelectableFields } from "./stmtMessagesSingleSelectableFields";
import { VersionType } from "./versionType";
export interface StmtMessagesSelectFieldsRequest {
    stmtMessagesStatementMessageCode: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: StmtMessagesSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
