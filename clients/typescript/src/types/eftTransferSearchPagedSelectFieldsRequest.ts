import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { EftTransferSingleSelectableFields } from "./eftTransferSingleSelectableFields";
import { EftTransferSearchFilter } from "./eftTransferSearchFilter";
import { VersionType } from "./versionType";

export interface EftTransferSearchPagedSelectFieldsRequest {
    accountNumber: string;
    eftLocator: number | null;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: EftTransferSingleSelectableFields;
    searchFilter: EftTransferSearchFilter;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}