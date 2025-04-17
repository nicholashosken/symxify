import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { NonAcctNameFmHistorySingleSelectableFields } from "./nonAcctNameFmHistorySingleSelectableFields";
import { VersionType } from "./versionType";
export interface NonAcctNameFmHistoryPagedListSelectFieldsRequest {
    nonAcctNameNonAcctNameNum: string;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: NonAcctNameFmHistorySingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
