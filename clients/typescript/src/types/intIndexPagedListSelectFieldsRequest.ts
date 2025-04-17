import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { IntIndexSingleSelectableFields } from "./intIndexSingleSelectableFields";
import { VersionType } from "./versionType";

export interface IntIndexPagedListSelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: IntIndexSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}