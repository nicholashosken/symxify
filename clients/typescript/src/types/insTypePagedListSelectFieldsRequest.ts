import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { InsTypeSingleSelectableFields } from "./insTypeSingleSelectableFields";
import { VersionType } from "./versionType";

export interface InsTypePagedListSelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: InsTypeSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}