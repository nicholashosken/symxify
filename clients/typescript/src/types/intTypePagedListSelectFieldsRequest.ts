import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { IntTypeSingleSelectableFields } from "./intTypeSingleSelectableFields";
import { VersionType } from "./versionType";

export interface IntTypePagedListSelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: IntTypeSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}