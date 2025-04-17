import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { StmtMessagesSingleSelectableFields } from "./stmtMessagesSingleSelectableFields";
import { VersionType } from "./versionType";
export interface StmtMessagesPagedListSelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: StmtMessagesSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
