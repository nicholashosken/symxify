import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { RegCcSingleSelectableFields } from "./regCcSingleSelectableFields";
import { VersionType } from "./versionType";

export interface RegCcPagedListSelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: RegCcSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}