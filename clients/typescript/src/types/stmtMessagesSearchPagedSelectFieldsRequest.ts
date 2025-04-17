import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { StmtMessagesSingleSelectableFields } from "./stmtMessagesSingleSelectableFields";
import { StmtMessagesSearchFilter } from "./stmtMessagesSearchFilter";
import { VersionType } from "./versionType";

export interface StmtMessagesSearchPagedSelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: StmtMessagesSingleSelectableFields;
    searchFilter: StmtMessagesSearchFilter;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}