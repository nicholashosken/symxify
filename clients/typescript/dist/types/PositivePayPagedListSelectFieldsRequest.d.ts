import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { PositivePaySingleSelectableFields } from "./positivePaySingleSelectableFields";
import { VersionType } from "./versionType";
export interface PositivePayPagedListSelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: PositivePaySingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
