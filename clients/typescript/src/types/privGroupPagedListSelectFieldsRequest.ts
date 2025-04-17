import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { PrivGroupSingleSelectableFields } from "./privGroupSingleSelectableFields";
import { VersionType } from "./versionType";

export interface PrivGroupPagedListSelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: PrivGroupSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}