import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { StmtMailNameSingleSelectableFields } from "./stmtMailNameSingleSelectableFields";
import { VersionType } from "./versionType";

export interface StmtMailNamePagedListSelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: StmtMailNameSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}