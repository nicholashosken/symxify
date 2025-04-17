import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { ShareHoldSingleSelectableFields } from "./shareHoldSingleSelectableFields";
import { ShareHoldSearchFilter } from "./shareHoldSearchFilter";
import { VersionType } from "./versionType";
export interface ShareHoldSearchPagedSelectFieldsRequest {
    accountNumber: string;
    shareId: string;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: ShareHoldSingleSelectableFields;
    searchFilter: ShareHoldSearchFilter;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
