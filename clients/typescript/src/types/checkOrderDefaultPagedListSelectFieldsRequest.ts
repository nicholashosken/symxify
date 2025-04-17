import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { CheckOrderDefaultSingleSelectableFields } from "./checkOrderDefaultSingleSelectableFields";
import { VersionType } from "./versionType";

export interface CheckOrderDefaultPagedListSelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: CheckOrderDefaultSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}