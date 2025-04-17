import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { SecuritySingleSelectableFields } from "./securitySingleSelectableFields";
import { VersionType } from "./versionType";

export interface SecurityPagedListSelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: SecuritySingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}