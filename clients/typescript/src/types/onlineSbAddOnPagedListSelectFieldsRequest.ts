import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { OnlineSbAddOnSingleSelectableFields } from "./onlineSbAddOnSingleSelectableFields";
import { VersionType } from "./versionType";

export interface OnlineSbAddOnPagedListSelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: OnlineSbAddOnSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}