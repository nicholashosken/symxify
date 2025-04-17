import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { ShareCheckOrderSingleSelectableFields } from "./shareCheckOrderSingleSelectableFields";
import { ShareCheckOrderSearchFilter } from "./shareCheckOrderSearchFilter";
import { VersionType } from "./versionType";
export interface ShareCheckOrderSearchPagedSelectFieldsRequest {
    accountNumber: string;
    shareId: string;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: ShareCheckOrderSingleSelectableFields;
    searchFilter: ShareCheckOrderSearchFilter;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
