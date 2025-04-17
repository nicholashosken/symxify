import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { WdFeeSingleSelectableFields } from "./wdFeeSingleSelectableFields";
import { WdFeeSearchFilter } from "./wdFeeSearchFilter";
import { VersionType } from "./versionType";
export interface WdFeeSearchPagedSelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: WdFeeSingleSelectableFields;
    searchFilter: WdFeeSearchFilter;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
