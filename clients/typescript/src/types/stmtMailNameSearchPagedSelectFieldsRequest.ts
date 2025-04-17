import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { StmtMailNameSingleSelectableFields } from "./stmtMailNameSingleSelectableFields";
import { StmtMailNameSearchFilter } from "./stmtMailNameSearchFilter";
import { VersionType } from "./versionType";

export interface StmtMailNameSearchPagedSelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: StmtMailNameSingleSelectableFields;
    searchFilter: StmtMailNameSearchFilter;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}