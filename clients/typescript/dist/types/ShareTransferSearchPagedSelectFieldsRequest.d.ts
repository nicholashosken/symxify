import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { ShareTransferSingleSelectableFields } from "./shareTransferSingleSelectableFields";
import { ShareTransferSearchFilter } from "./shareTransferSearchFilter";
import { VersionType } from "./versionType";
export interface ShareTransferSearchPagedSelectFieldsRequest {
    accountNumber: string;
    shareId: string;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: ShareTransferSingleSelectableFields;
    searchFilter: ShareTransferSearchFilter;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
