import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { CheckFmHistorySingleSelectableFields } from "./checkFmHistorySingleSelectableFields";
import { VersionType } from "./versionType";

export interface CheckFmHistoryPagedListSelectFieldsRequest {
    checkGlobalSequenceDate: string | null;
    checkGlobalSequence: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: CheckFmHistorySingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}