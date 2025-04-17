import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { BatchRcSingleSelectableFields } from "./batchRcSingleSelectableFields";
import { VersionType } from "./versionType";
export interface BatchRcPagedListSelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: BatchRcSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
