import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { FmHistorySingleSelectableFields } from "./fmHistorySingleSelectableFields";
import { VersionType } from "./versionType";

export interface FmHistoryPagedListSelectFieldsRequest {
    accountNumber: string;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: FmHistorySingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}