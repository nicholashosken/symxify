import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { LateChgSingleSelectableFields } from "./lateChgSingleSelectableFields";
import { VersionType } from "./versionType";

export interface LateChgPagedListSelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: LateChgSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}