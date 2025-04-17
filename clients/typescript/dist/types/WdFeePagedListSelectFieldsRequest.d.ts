import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { WdFeeSingleSelectableFields } from "./wdFeeSingleSelectableFields";
import { VersionType } from "./versionType";
export interface WdFeePagedListSelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: WdFeeSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
