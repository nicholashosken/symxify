import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { SecFieldSingleSelectableFields } from "./secFieldSingleSelectableFields";
import { VersionType } from "./versionType";

export interface SecFieldPagedListSelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: SecFieldSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}