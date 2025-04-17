import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { DivTableSingleSelectableFields } from "./divTableSingleSelectableFields";
import { VersionType } from "./versionType";

export interface DivTablePagedListSelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: DivTableSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}