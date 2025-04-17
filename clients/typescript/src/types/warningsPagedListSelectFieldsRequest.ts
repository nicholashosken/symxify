import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { WarningsSingleSelectableFields } from "./warningsSingleSelectableFields";
import { VersionType } from "./versionType";

export interface WarningsPagedListSelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: WarningsSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}