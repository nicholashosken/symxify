import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { SymXDeviceMapSingleSelectableFields } from "./symXDeviceMapSingleSelectableFields";
import { VersionType } from "./versionType";

export interface SymXDeviceMapPagedListSelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: SymXDeviceMapSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}