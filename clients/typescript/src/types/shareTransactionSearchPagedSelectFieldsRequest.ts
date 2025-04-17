import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { ShareTransactionSingleSelectableFields } from "./shareTransactionSingleSelectableFields";
import { ShareTransactionSearchFilter } from "./shareTransactionSearchFilter";
import { VersionType } from "./versionType";

export interface ShareTransactionSearchPagedSelectFieldsRequest {
    accountNumber: string;
    shareId: string;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: ShareTransactionSingleSelectableFields;
    searchFilter: ShareTransactionSearchFilter;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}