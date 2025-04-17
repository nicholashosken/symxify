import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { AcsServiceSingleSelectableFields } from "./acsServiceSingleSelectableFields";
import { VersionType } from "./versionType";

export interface AcsServicePagedListSelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: AcsServiceSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}