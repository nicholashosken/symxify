import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { InsTableSingleSelectableFields } from "./insTableSingleSelectableFields";
import { VersionType } from "./versionType";
export interface InsTablePagedListSelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: InsTableSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
